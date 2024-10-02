declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number | undefined;
      EMAIL_USER: string | undefined;
      EMAIL_API_KEY: string | undefined;
      EMAIL_PASS: string | undefined;
    }
  }
}
export {};
