import { configureStore } from '@reduxjs/toolkit'
import luminaireReducer from './luminaire-slice'

const store = configureStore({
    reducer: {
        luminaire: luminaireReducer
    }
})

export default store