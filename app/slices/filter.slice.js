import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        locations: [],
        jobTypes: [],
        postScope: "newest",
    },
    reducers: {
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
        setJobTypes: (state, action) => {
            state.jobTypes = action.payload;
        },
        setPostScope: (state, action) => {
            state.postScope = action.payload;
        },
    },
});

export const { setLocations, setJobTypes, setPostScope } = filterSlice.actions;
export default filterSlice.reducer;
