import { createSlice } from "@reduxjs/toolkit";

const initialState={
    menu: [],
    status: "loading"
}

const fetchingMenuSlice=createSlice({
            name: "FetchingMenu",
            initialState,
            reducers: {
                dataReceived(state, action){
                    state.menu=action.payload;
                    state.status="ready";
                },
                dataFailed(state){
                    state.status="error";
                }
            }
})
export const {dataFailed, dataReceived}  =fetchingMenuSlice.actions;

export default fetchingMenuSlice.reducer;