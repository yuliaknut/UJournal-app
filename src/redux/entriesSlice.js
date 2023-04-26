import { createSlice } from "@reduxjs/toolkit";

export const entriesSlice = createSlice({
    name: 'entryStorage',
    initialState: {
        entries: []
    },
    reducers: {
        add: (state, action) => {
            state.entries.unshift(action.payload);
        },
        remove: (state, action) => {
            const indexToRemove = state.entries.findIndex(obj => obj.id === action.payload);
            state.entries.splice(indexToRemove, 1);
        },
        edit: (state, action) => {
            const indexToEdit = state.entries.findIndex(obj => obj.id === action.payload.entryId);
            state.entries.splice(indexToEdit, 1, action.payload.newEntry);
        }
    }
})

export const { add, remove, edit } = entriesSlice.actions;
export default entriesSlice.reducer;