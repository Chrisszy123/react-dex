import {ethers} from "ethers"

let provider
export function loadWeb3() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = requestAccounts()
    const signer = provider.getSigner()
    return {provider, signer, account}
}
async function requestAccounts() {
    const accounts = await provider.send("eth_requestAccounts", [])
    return accounts
}
