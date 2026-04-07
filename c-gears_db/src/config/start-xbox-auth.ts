import { Request, Response } from "express";

export const startXboxAuth = (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) return res.status(401).send("Unauthorized");

  const state = Buffer.from(JSON.stringify({ userId })).toString("base64");
  res.cookie("xbox_link_state", state, { maxAge: 300000, httpOnly: true });

  const scope = "XboxLive.signin offline_access";
  const authUrl = `https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?client_id=${process.env.XBOX_CLIENT_ID}&response_type=code&redirect_uri=${process.env.XBOX_REDIRECT_URI}&response_mode=query&scope=${scope}&state=${state}`;

  res.redirect(authUrl);
};
