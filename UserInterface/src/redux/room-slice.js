import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: { length: 0.0, width: 0.0 }
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        changeDimensions(state, action) {
            //state.room = { length: action.payload.length, width: action.payload.width }
        }
    }
})

export const thunkCreator = () => {
    return (dispatch) => {
        execAsync(JSON.stringify({
            functionName: 'DetermineRoomDimensions',
            invokeAsCommand: false,
            functionParams: { args: 'args' }
        }), 
        res => {dispatch(changeDimensions(res.retValue))})
    }
}

export const { changeDimensions } = roomSlice.actions
export default roomSlice.reducer