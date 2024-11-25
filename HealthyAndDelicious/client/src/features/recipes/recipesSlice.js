import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: {},
    
}


export const recipesSlice = createSlice({
    name: 'recipes', 
    initialState
})
export default recipesSlice.reducer