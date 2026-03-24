import passport from "passport";
import { Strategy as SteamStrategy } from "passport-steam";
import AppDataSource from "../data-source";
import { Users } from "../entities/user.entity";

const userRepository = AppDataSource.getRepository(Users);

passport.use(
  new SteamStrategy(
    {
      returnURL: process.env.STEAM_RETURN_URL!,
      realm: process.env.STEAM_REALM!,
      apiKey: process.env.STEAM_API_KEY!,
    },
    async (identifier: string, profile: any, done: any) => {
      return done(null, {
        steamid: profile.id,
        displayName: profile.displayName,
      });
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await userRepository.findOneBy({ id });

    if (!user) return done(null, false);

    done(null, {
      id: user.id,
      steamid: undefined,
      isAdm: user.isAdm,
      isActive: user.isActive,
      availability: user.availability,
    });
  } catch (error) {
    done(error as Error);
  }
});

export default passport;
