const CONTRACT_ADDRESS = '0xB371d267DD1e2897ED43De8D08e0BbcF07289553';

const transformCharacterData = (characterData) => {
    return {
        name: characterData.name,
        imageURI: characterData.imageURI,
        hp: characterData.hp.toNumber(),
        maxHp: characterData.maxHp.toNumber(),
        attackDamage: characterData.attackDamage.toNumber()
    };
};

export { CONTRACT_ADDRESS, transformCharacterData };