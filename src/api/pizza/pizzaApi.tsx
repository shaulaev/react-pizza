import {createAsyncThunk} from "@reduxjs/toolkit"

export const getPizza = createAsyncThunk("pizza/getPizza", async () => {
    const data = await fetch("https://6366ee2679b0914b7d94e74.mockapi.io/pizza")

    return await data.json()
})