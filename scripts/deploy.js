const hre = require("hardhat");
const { factory } = require("./utils/constants");
require("dotenv").config();

async function main() {
  const network = await hre.ethers.provider.getNetwork();
  console.log("deploying to", network.name, network.chainId);

  const signer = await hre.ethers.provider.getSigner();
  console.log("deploying with", await signer.getAddress());

  console.log("contract factory");
  const contractFactory = await hre.ethers.getContractFactory(
    "SuperETHGlobalToken"
  );
  console.log("deploy");
  const tokenContract = await contractFactory.deploy();
  console.log("got the contract", tokenContract);
  await tokenContract.deployed();
  console.log("Contract deployed to:", tokenContract.address);

  const superTokenFactory = factory[network.chainId];

  console.log("just some call to check if we fetched the correct instance");
  const ret = await tokenContract.initialize(superTokenFactory);
  console.log("some return value", ret);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
