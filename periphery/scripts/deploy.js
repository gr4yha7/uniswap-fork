const hre = require("hardhat");

const FACTORY_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const owner = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
async function main() {
  const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
  const factory = await UniswapV2Factory.deploy(owner); // constructor

  await factory.deployed();

  console.log("Uniswap V2 Factory deployed to:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


// Ether is not an ERC2O token.
// Wrap ether in order to use it in uniswap