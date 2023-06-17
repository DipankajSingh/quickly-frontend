import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        userName: ""
    }
}

const userSclice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state = initialState
        }
    }
})
export const { login, logout } = userSclice.actions;

export const store = configureStore({
    reducer: {
        user: userSclice.reducer
    }
})
