import { createSlice } from '@reduxjs/toolkit'
import { luminaireApi } from '../api/api'

const initialState = {
    luminaires: [],
    pageSize: 5,
    totalPages: 0,
    currentPage: 1
}

const luminairesManagementSlice = createSlice({
    name: 'luminaireManagement',
    initialState,
    reducers: {
        setLuminaires(state, action) {
            //debugger
            state.luminaires = action.payload
        }
    }
})

export const getLuminaires = (currentPage, pageSize) => {
    return (dispatch) => {
        luminaireApi.getLuminaresPage(currentPage, pageSize)
            .then(data => {
                dispatch(setLuminaires(data.Luminaires.Entities))
            },
                er => console.log(er)
            )
    }
}

export const { setLuminaires } = luminaireSlice.actions
export default luminairesManagementSlice.reducer