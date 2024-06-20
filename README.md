# Hampter Components

A collection of (mostly) stand-alone components for Next.js using React, Typescript and Styled components

## Using this example

Run the following command:

```sh
yarn dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: A showcase of the available components
- `@repo/ui`: The React component library
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn dev
```
