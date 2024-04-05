export const NPM_TYPESCRIPT = "npm install typescript --save-dev";

export const EXPRESS_INSTALL_COMMANDS = {
  npm: "npm install express --save-dev",
  pnpm: "pnpm install express --save-dev",
  yarn: "yarn add express --dev",
};

export const TYPESCRIPT_INSTALL_COMMANDS = {
  npm: "npm install typescript --save-dev",
  pnpm: "pnpm install typescript --save-dev",
  yarn: "yarn add typescript --dev",
};

export const TYPES_INSTALL_COMMAND = {
  npm: "npm install @types/express @types/node --save-dev",
  pnpm: "pnpm install @types/express @types/node --save-dev",
  yarn: "yarn add @types/express @types/node --dev",
};

export const ESLINT_INSTALL_COMMAND = {
  npm: "npm install @typescript-eslint/eslint-plugin@^7.0.1 @typescript-eslint/parser@^7.0.1 eslint@^8.56.0 --save-dev",
  pnpm: "pnpm install @typescript-eslint/eslint-plugin@^7.0.1 @typescript-eslint/parser@^7.0.1 eslint@^8.56.0 --save-dev",
  yarn: "yarn add @typescript-eslint/eslint-plugin@^7.0.1 @typescript-eslint/parser@^7.0.1 eslint@^8.56.0 --dev",
};

export const PRETTIER_INSTALL_COMMAND = {
  npm: "npm install eslint-config-prettier@^9.1.0 eslint-plugin-prettier@^5.1.3 --save-dev",
  pnpm: "pnpm install eslint-config-prettier@^9.1.0 eslint-plugin-prettier@^5.1.3 --save-dev",
  yarn: "yarn add eslint-config-prettier@^9.1.0 eslint-plugin-prettier@^5.1.3 --dev",
};

export const getDefaultProjectJSON = (name) => ({
  name: name.toLowerCase(),
  version: "1.0.0",
  description: "",
  main: "src/index.ts",
  type: "module",
  scripts: {
    build: "npx tsc",
    preserver: "npm run build",
    server: 'npx concurrently "npx tsc -w"  "nodemon dist/server.js"',
  },
  keywords: [],
  author: "",
  license: "ISC",
  dependencies: {},
  devDependencies: {},
});
