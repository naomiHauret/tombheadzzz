# Tombheadzzz
A Tombheads Escrow UI skin, built with SolidJS, Ethers and TailwindCSS.

> [Tombheads](https://beta-nft-escrow.vercel.app/) is the first Erc 721 escrow for NFTs on Fantom. Join the auction house on our Discord to start bidding !

## Prerequisites
- `node` version >= 12
- `npm`, `yarn` or `pnpm`

## Get started
### Install dependencies & setup the githooks
Run `npm run setup`. This will :
- Install the project dependencies with `npm install`
- Setup the git hooks (via `husky`) with `npm run prepare`

## Scripts

In the project directory, you can run:

### `npm start` or `npm run dapp:dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>

### `npm run dapp:build`

Builds the app for production to the `dist` folder.

### `npm run format`

Formats `.json`, `.js`, `.jsx`, `.ts`, `.tsx` and `.css` files using `prettier`.

### `npm run commit`

Runs `commitizen`