import { createSlice } from "@reduxjs/toolkit"
import { getPizza } from "../api/pizza/pizzaApi"
import { SerializedError } from "@reduxjs/toolkit"

interface state {
    pending: boolean,
    data: Array<any>,
    error: null | SerializedError
}

const pizza = createSlice({
    name: 'pizza',
    initialState: {
        pending: false,
        data: [],
        error: null
    } as state,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPizza.pending, (state) => {
            state.pending = true;
            state.error = null;
        })
        builder.addCase(getPizza.fulfilled, (state, action) => {
            state.pending = false;
            state.error = null;
            state.data = action.payload
        })
        builder.addCase(getPizza.rejected, (state, action) => {
            state.pending = false;
            state.error = action.error
        })
    }
})

export default pizza