import {createSlice} from "@reduxjs/toolkit"

const cardSlice = createSlice({
    name : "card",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearItems: (state) => {
            state.items.length = 0;
        },
    }
})

export const {addItems, removeItem, clearItems} = cardSlice.actions;
export default cardSlice.reducer;