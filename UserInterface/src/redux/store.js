import { configureStore } from '@reduxjs/toolkit'
import luminaireReducer from './luminaire-slice'
import roomReducer from './room-slice'

const store = configureStore({
    reducer: {
        luminaire: luminaireReducer,
        room: roomReducer
    }
})

export default store