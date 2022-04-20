

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Jinx", "Kaisa", "Vi"],       // Names
        ["https://i.imgur.com/47Y8T6I.jpeg", // Images
        "https://i.imgur.com/xsZM1Ky.jpeg", 
        "https://i.imgur.com/irHdOrF.jpeg"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],                       // Attack damage values
        "Baron Nashore", // Boss name
        "https://i.imgur.com/AksR0tt.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
      );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

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