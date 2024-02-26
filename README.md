# express-lint-ts

`express-lint-ts` is a package that facilitates the setup of Express.js applications with predefined TypeScript, ESLint, and Prettier configurations for Express projects.

## Features

- Preconfigured TypeScript setup for Express applications.
- Integrated ESLint for code linting.
- Prettier setup for code formatting.

## Installation

You can install `express-lint-ts` globally to use it as a command line tool:

```bash
npm install -g express-lint-ts
```

## Usage

To generate a new Node.js application with `express-lint-ts`, run the following command:

```bash
npx express-lint-ts <project_name>
```

By default, ESLint, TypeScript, and Prettier configurations will be applied. However, you can turn off each of these features using the following flags:

- **--no-lint:** Disables ESLint configuration.
- **--no-ts:** Disables TypeScript configuration.
- **--no-prettier:** Disables Prettier configuration.
