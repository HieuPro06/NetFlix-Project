import { configureStore } from "@reduxjs/toolkit";
import { reducerEnable } from "./reducer/reducerEnable";
import { reducerVideo } from "./reducer/reducerVideo";

export const store = configureStore({
    reducer: {
        enable: reducerEnable,
        video: reducerVideo
    }
})