const {getWeth} = require("../scripts/getWeth")
const {getNamedAccounts} = require("hardhat")

async function main() {
    await getWeth()
    const {deployer} = await getNamedAccounts()
}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error)
    process.exit(1)
})