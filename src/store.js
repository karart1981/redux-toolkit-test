import { configureStore } from "@reduxjs/toolkit";
import { reducer } from '../src/features/users/users.slice'

export const store = configureStore({
    reducer: reducer
})