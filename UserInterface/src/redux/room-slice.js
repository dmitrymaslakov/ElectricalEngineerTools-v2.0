import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    room: { length: 0.0, width: 0.0 }
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        changeDimensions(state, action) {
            console.log(action.payload)

            //state.room = { length: action.payload.length, width: action.payload.width }
        }
    }
})

export const thunkCreator = () => {
    return (dispatch) => {
        /*let obj
        const secc = (result) => {
            obj = JSON.parse(result)
            console.log(obj.retValue)
        }

        let wrapExecAsync = window['execAsync']
        wrapExecAsync(JSON.stringify({
            functionName: 'DetermineRoomDimensions',
            invokeAsCommand: false,
            functionParams: { args: 'args' }
        }),
            secc,
            result => console.log('err'))*/


        dispatch(changeDimensions('obj'))
    }
}

export const { changeDimensions } = roomSlice.actions
export default roomSlice.reducer