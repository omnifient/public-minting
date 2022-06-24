const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const network = await hre.ethers.provider.getNetwork();
  console.log("deploying to", network.name, network.chainId);

  const signer = await hre.ethers.provider.getSigner();
  console.log("deploying with", await signer.getAddress());

  console.log("fetching the contract");
  const contractFactory = await hre.ethers.getContractFactory(
    "SuperETHGlobalToken"
  );
  const ethgxContract = await contractFactory.attach(
    "0xDbF73fD909aD55f2aEE04f328b590945aFC7e5e6"
  );
  console.log("contract fetched!");

  console.log("mint some tokens");
  const ret = await ethgxContract.publicMint(
    hre.ethers.utils.parseEther("1000")
  );
  console.log("some return value", ret);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
