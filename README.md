# Public Minting

Ever needed some ERC20 tokens to test things with, but tired of looking for faucets?

Well, how about some tokens that you can just mint by yourself?
That's what this is all about.

There are examples for regular ERC20 tokens (based on OpenZeppelin's contract), and Superfluid Pure Supertokens.

## Advanced Sample Hardhat Project

```shell
npx hardhat run --network mumbai scripts/deploy-erc20.js

npx hardhat run --network mumbai scripts/deploy-ethgx.js
npx hardhat run --network mumbai scripts/mint-ethgx.js
```

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

## Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --contract contracts/StableToken.sol:StableToken --network mumbai 0xf3978Cd0b517910D55af7bA7d1278C55BcFB4a1A
```
