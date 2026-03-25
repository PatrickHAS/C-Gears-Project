import { Request, Response } from "express";
import { linkAccountService } from "../../services/linked-account/link-account.service";
import { LinkedAccountProvider } from "../../entities/user-linked-account.entity";

export const steamLinkController = async (req: Request, res: Response) => {
  try {
    const state = req.cookies["steam_link_state"];

    if (!state) {
      return res
        .status(400)
        .json({ message: "Missing state (cookie expired or missing)" });
    }

    res.clearCookie("steam_link_state");

    const { userId } = JSON.parse(
      Buffer.from(state, "base64").toString("utf-8"),
    );

    const steamId = req.user?.steamid;

    if (!steamId) {
      return res.status(400).json({ message: "Steam ID not found" });
    }

    const response = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`,
    );

    const data = await response.json();
    const player = data.response.players[0];

    if (!player) {
      return res.status(400).json({ message: "Steam user not found" });
    }

    await linkAccountService({
      userId,
      provider: LinkedAccountProvider.STEAM,
      providerId: steamId,
      gamertag: player.personaname,
    });

    return res.redirect("http://localhost:5173/?linkStatus=success");
  } catch (error: any) {
    console.error(error);

    const message = error.message || "error";

    let statusParam = "error";
    if (message.includes("already linked to your profile"))
      statusParam = "already_linked";
    if (message.includes("already linked to another user"))
      statusParam = "linked_to_another";

    return res.redirect(`http://localhost:5173?linkStatus=${statusParam}`);
  }
};
