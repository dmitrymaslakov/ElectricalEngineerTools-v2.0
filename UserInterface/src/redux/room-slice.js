import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: { length: 0.0, width: 0.0 }
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        changeDimensions(state, action) {
            console.log('reducer')
            //state.room = { length: action.payload.length, width: action.payload.width }
        }
    }
})

export const thunkCreator = () => {
    let wrapExecAsync = window['execAsync']

    //const secc = res => {dispatch(changeDimensions(res.retValue))}
    const secc = (result) => console.log(result.retValue)
    const err = () => console.log('err')
    return (dispatch) => {
        wrapExecAsync(JSON.stringify({
            functionName: 'DetermineRoomDimensions',
            invokeAsCommand: false,
            functionParams: { args: 'args' }}),
            secc,
            err)
    }
}

export const { changeDimensions } = roomSlice.actions
export default roomSlice.reducer