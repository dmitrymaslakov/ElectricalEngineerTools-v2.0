import { createSlice, current } from '@reduxjs/toolkit'
import { luminaireApi } from '../api/api'

const initialState = {
    Length: 0.0,
    Width: 0.0,
    Area: 0.0,
    Illuminance: 0.0,
    SafetyFactor: 1.2,
    NumberAlongX: 0,
    NumberAlongY: 0,
    WorkingSurfaceHeight: 0.8,
    MountingHeight: 0.0,
    PcPwPwsList: ['70-50-30', '70-50-10', '50-30-10'],
    PcPwPws: '70-50-30'
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        updateLength(state, action) {
            state.Length = action.payload
        },
        updateWidth(state, action) {
            state.Width = action.payload
        },
        updateArea(state, action) {
            state.Area = state.Width * state.Length
        },
        updatePcPwPws(state, action) {
            state.PcPwPws = action.payload
        },
        updateWorkingSurfaceHeight(state, action) {
            state.WorkingSurfaceHeight = action.payload
        },
        updateSafetyFactor(state, action) {
            state.SafetyFactor = action.payload
        },
        updateNumberAlongX(state, action) {
            state.NumberAlongX = action.payload
        },
        updateNumberAlongY(state, action) {
            state.NumberAlongY = action.payload
        },
        setIlluminance(state, action) {
            state.Illuminance = action.payload
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
                dispatch(updateLength(length))
                dispatch(updateWidth(width))
                dispatch(updateArea())
            },
            resultAsString => {
                console.log(JSON.parse(resultAsString))
            }
        )
    }
}

export const getIlluminance = () => {
    return (dispatch, getState) => {
        let roomData = { 
            LuminaireId: getState().luminaire.pickedLuminaire.Id,
            LuminousFlux: getState().luminaire.luminousFlux,
            SafetyFactor: getState().room.SafetyFactor,
            Area: getState().room.Area,
            NumberAlongX: getState().room.NumberAlongX,
            NumberAlongY: getState().room.NumberAlongY,
            WorkingSurfaceHeight: getState().room.WorkingSurfaceHeight,
            MountingHeight: getState().luminaire.mountingHeight,
            PcPwPws: getState().room.PcPwPws,
            Length: getState().room.Length,
            Width: getState().room.Width
        }

        luminaireApi.getIlluminance(roomData)
            .then(data => {
                dispatch(setIlluminance(data))
            },
                er => console.log(er)
            )
    }
}

export const {
    updateLength,
    updateWidth,
    updateArea,
    updatePcPwPws,
    updateWorkingSurfaceHeight,
    updateSafetyFactor,
    updateNumberAlongX,
    updateNumberAlongY,
    setIlluminance } = roomSlice.actions
export default roomSlice.reducer