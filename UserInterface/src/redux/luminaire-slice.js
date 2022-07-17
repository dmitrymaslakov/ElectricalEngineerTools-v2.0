import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    luminaireParameters: [
        {id:0, name: 'Производитель'}
    ],
    manufacturers: [
        {id:0, name: 'SVS-Lighting'}
    ],
}

const luminaireSlice = createSlice({
    name: 'luminaire',
    initialState,
    reducers: {
        addParameter(state, action){
            state.luminaireParameters.push({id:action.payload.id, name: action.payload.name})
        },
        addManufacturer(state, action){
            state.manufacturers.push({id:action.payload.id, name: action.payload.name})
        }
    }
})

export const {addParameter, addManufacturer} = luminaireSlice.actions
export default luminaireSlice.reducer