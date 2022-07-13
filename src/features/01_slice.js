import { createSlice } from "@reduxjs/toolkit";
import { loadWeb3 } from "./interactions/interactions";

const {provider, signer, account}  = loadWeb3()

export const web3Slice = createSlice({
    name: "web3",
    initialState: {
        connection: {},
        account: [],
        signer: {}
    },
    reducers: {
        connected: (state) => {
            state.connection = provider
            console.log(account)
            state.account = account
            state.signer = signer
        },
        disconnect: state => {
            console.log("disconnected state")
        }
    }
})

export const {connected, disconnect} = web3Slice.actions

export default web3Slice.reducer