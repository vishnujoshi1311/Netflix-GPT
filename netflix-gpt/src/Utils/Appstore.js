import {configurestore} from "@reduxjs/toolkit"
import { useReducer } from "react"

const appstore = configurestore(
    {
        reducer: {user:useReducer}
    }
)
export default appstore;