const hre = require("hardhat");

async function main() {
  console.log("Deploying MusicMarketplace contract...");

  const MusicMarketplace = await hre.ethers.getContractFactory("MusicMarketplace");
  const musicMarketplace = await MusicMarketplace.deploy();

  await musicMarketplace.deployed();

  console.log("MusicMarketplace deployed to:", musicMarketplace.address);
  console.log("Deployment transaction hash:", musicMarketplace.deployTransaction.hash);
  
  // Verify contract on Etherscan (if on a public network)
  if (hre.network.name !== "hardhat" && hre.network.name !== "localhost") {
    console.log("Waiting for block confirmations...");
    await musicMarketplace.deployTransaction.wait(6);
    
    try {
      await hre.run("verify:verify", {
        address: musicMarketplace.address,
        constructorArguments: [],
      });
      console.log("Contract verified on Etherscan");
    } catch (error) {
      console.log("Verification failed:", error.message);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
