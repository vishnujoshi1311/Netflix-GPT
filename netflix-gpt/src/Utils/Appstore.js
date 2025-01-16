import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "react"

const appstore = configureStore(
    {
        reducer: {user:userReducer},
    }
)
export default appstore;