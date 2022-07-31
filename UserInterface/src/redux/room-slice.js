import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    roomDimensions: { length: 0.0, width: 0.0 }
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        changeDimensions(state, action) {
            state.roomDimensions = { length: action.payload.length, width: action.payload.width }
        },
        updateLength(state, action){
            state.roomDimensions.length = action.payload
        },
        updateWidth(state, action){
            state.roomDimensions.width = action.payload
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
                dispatch(changeDimensions({length, width}))
            },
            resultAsString => {
                console.log(JSON.parse(resultAsString))
            }
        )
    }
}

export const {updateLength, updateWidth, changeDimensions } = roomSlice.actions
export default roomSlice.reducer