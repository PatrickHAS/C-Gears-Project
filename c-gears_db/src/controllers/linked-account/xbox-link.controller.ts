import { Request, Response } from "express";
import axios from "axios";
import { linkAccountService } from "../../services/linked-account/link-account.service";
import { LinkedAccountProvider } from "../../entities/user-linked-account.entity";

export const xboxLinkController = async (req: Request, res: Response) => {
  try {
    const { code } = req.query;
    const stateCookie = req.cookies["xbox_link_state"];

    if (!code || !stateCookie) {
      return res.redirect("http://localhost:5173/?linkStatus=error");
    }

    res.clearCookie("xbox_link_state");
    const { userId } = JSON.parse(
      Buffer.from(stateCookie, "base64").toString("utf-8"),
    );

    const tokenResponse = await axios.post(
      "https://login.microsoftonline.com/consumers/oauth2/v2.0/token",
      new URLSearchParams({
        client_id: process.env.XBOX_CLIENT_ID!,
        client_secret: process.env.XBOX_CLIENT_SECRET!,
        code: code as string,
        redirect_uri: process.env.XBOX_REDIRECT_URI!,
        grant_type: "authorization_code",
      }).toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
    );

    const accessToken = tokenResponse.data.access_token;

    const xasuResponse = await axios.post(
      "https://user.auth.xboxlive.com/user/authenticate",
      {
        RelyingParty: "http://auth.xboxlive.com",
        TokenType: "JWT",
        Properties: {
          AuthMethod: "RPS",
          SiteName: "user.auth.xboxlive.com",
          RpsTicket: `d=${accessToken}`,
        },
      },
    );

    const xasuToken = xasuResponse.data.Token;
    const uhs = xasuResponse.data.DisplayClaims.xui[0].uhs;

    const xstsResponse = await axios.post(
      "https://xsts.auth.xboxlive.com/xsts/authorize",
      {
        RelyingParty: "http://xboxlive.com",
        TokenType: "JWT",
        Properties: { SandboxId: "RETAIL", UserTokens: [xasuToken] },
      },
    );

    const xstsToken = xstsResponse.data.Token;
    const gamertag = xstsResponse.data.DisplayClaims.xui[0].gtg;
    const xuid = xstsResponse.data.DisplayClaims.xui[0].xid;

    await linkAccountService({
      userId,
      provider: LinkedAccountProvider.XBOX,
      providerId: xuid,
      gamertag: gamertag,
    });

    return res.redirect(
      "http://localhost:5173/?linkStatus=success&provider=xbox",
    );
  } catch (error: any) {
    console.error("Xbox Link Error:", error.response?.data || error.message);

    let statusParam = "error";
    const errorMessage = error.message || "";

    if (errorMessage.includes("already linked to your profile"))
      statusParam = "already_linked";
    if (errorMessage.includes("already linked to another user"))
      statusParam = "linked_to_another";

    return res.redirect(
      `http://localhost:5173?linkStatus=${statusParam}&provider=xbox`,
    );
  }
};
