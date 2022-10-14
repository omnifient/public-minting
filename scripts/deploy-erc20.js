const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const ERC20_CONTRACT_NAME = "StableToken";

  const network = await hre.ethers.provider.getNetwork();
  console.log("deploying to", network.name, network.chainId);

  const signer = await hre.ethers.provider.getSigner();
  console.log("deploying with", await signer.getAddress());

  console.log("contract factory");
  const contractFactory = await hre.ethers.getContractFactory(
    ERC20_CONTRACT_NAME
  );

  console.log("deploy");
  const tokenContract = await contractFactory.deploy();
  console.log("got the contract", tokenContract);
  await tokenContract.deployed();
  console.log("Contract deployed to:", tokenContract.address);

  console.log("mint something");
  const ret = await tokenContract.publicMint(
    hre.ethers.BigNumber.from("1000000000000000000000000")
  );
  console.log("some return value", ret);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
