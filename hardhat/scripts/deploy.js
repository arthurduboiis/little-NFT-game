const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Jinx", "Kaisa", "Vi"], // Names
    [
      "https://i.imgur.com/47Y8T6I.png", // Images
      "https://i.imgur.com/xsZM1Ky.png",
      "https://i.imgur.com/irHdOrF.png",
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    "Baron Nashor", // Boss name
    "https://i.imgur.com/lWgL461.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
