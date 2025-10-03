# `@saas/prettier-config`

Shared Prettier configuration for the monorepo.

## Usage

To use this configuration in a package, add it as a dependency:

```json
{
  "devDependencies": {
    "@saas/prettier-config": "workspace:*",
    "prettier": "^3.6.2"
  },
  "prettier": "@saas/prettier-config"
}
```

Or create a `prettier.config.js` file:

```javascript
import config from '@saas/prettier-config';

export default config;
```

## Available Scripts

Add these scripts to your package.json:

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,scss,md}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,js,jsx,json,css,scss,md}\""
  }
}
```
