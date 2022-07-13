import {configureStore} from '@reduxjs/toolkit'
import web3Reducer from "../features/01_slice"

export default configureStore({
    reducer: {
        web3: web3Reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
})