// import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export const tinaConfig = {
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  isLocal,
};

export { };
