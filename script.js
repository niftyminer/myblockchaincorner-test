
const myBlockchainCornerAddress = "0x8c051c68d9601771ce96d4c9e971985aede480f7"

async function setup() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = provider.getSigner()


    const abi = await fetch('./abi.json').then(abi => abi.json())
    const myBlockchainCorner = new ethers.Contract(
        myBlockchainCornerAddress,
        abi,
        signer
    )

    return { signer, myBlockchainCorner }
}

async function buyTile() {
    const { myBlockchainCorner } = await setup()
    const cost = await myBlockchainCorner.buyTile(0, 0, 1, "<h1>Brain Genius</h1>");
    console.log(cost);
}
