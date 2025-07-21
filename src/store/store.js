import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "name",
    initialState: "업무테스트",
    reducers: {
        setName: (state, action) => action.payload,
    },
});

export const { setName } = userSlice.actions;

const store = configureStore({
    reducer: {
        name: userSlice.reducer,
    },
});

export default store;



