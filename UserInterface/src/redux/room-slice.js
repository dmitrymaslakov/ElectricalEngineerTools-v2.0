import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dimensions: { length: 0.0, width: 0.0 },
    area: 0.0
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        changeDimensions(state, action) {
            state.dimensions = { length: action.payload.length, width: action.payload.width }
        },
        updateLength(state, action) {
            state.dimensions.length = action.payload
        },
        updateWidth(state, action) {
            state.dimensions.width = action.payload
        },
        updateArea(state, action) {
            state.area = state.dimensions.width * state.dimensions.length
        }
    }
})

export const launchRoomDimensions = () => {
    return (dispatch) => {
        window['execAsync'](
            JSON.stringify({
                functionName: 'DetermineRoomDimensions',
                invokeAsCommand: false,
                functionParams: { args: 'args' }
            }),
            resultAsString => {
                const [length, width] = JSON.parse(resultAsString).retValue
                dispatch(changeDimensions({ length, width }))
                dispatch(updateArea())
            },
            resultAsString => {
                console.log(JSON.parse(resultAsString))
            }
        )
    }
}

export const { updateLength, updateWidth, updateArea, changeDimensions } = roomSlice.actions
export default roomSlice.reducer