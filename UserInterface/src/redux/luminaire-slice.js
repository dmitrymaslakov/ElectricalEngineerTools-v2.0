import { createSlice } from '@reduxjs/toolkit'
import { luminaireApi } from '../api/api'

const initialState = {
    luminaires: [],
    pageSize: 5,
    totalPages: 0,
    currentPage: 1,
    luminaireParameters: [
        { id: 0, name: 'Производитель', value: ['SVS-Lighting', 'Lighting Technologies', 'ЗАО Белинтегра'] },
        { id: 1, name: 'Форма', value: ['Прямоугольный', 'Квадрат'] },
        { id: 2, name: 'Способ монтажа', value: ['Потолочный', 'Встраиваемый в Armstrong', 'Встраиваемый в гипсокартон', 'Подвесной'] },
        { id: 3, name: 'Источник света', value: ['Светодиодный модуль', 'Светодиодная лампа', 'Люминесцентная лампа', 'Лампа накаливания'] },
        { id: 4, name: 'Количество ламп в светильнике', value: [1, 2, 3, 4] },
        { id: 5, name: 'Климатическое исполнение', value: ['УХЛ1', 'УХЛ2', 'УХЛ4', 'УХЛ5'] },
        { id: 6, name: 'Остальные параметры', value: ['Пылевлагозащищенный', 'Пожаробезопасный', 'Взрывобезопасный', 'БАП'] }
    ],
    /*luminaire: {
        id: 0,
        brand: '',
        lamp: '',
        power: 0,
        luminousFlux: 1000
    },*/
    pickedLuminaire: {
        BPSU: false,
        Brand: '',
        LightSourceInfo: { LightSourceType: '', Power: '' }
    },
    luminousFlux: 1000,
    mountingHeight: 2.5,
}

const luminaireSlice = createSlice({
    name: 'luminaire',
    initialState,
    reducers: {
        getPage(state, action) {
            //state.luminaires.push(...action.payload)
            //debugger
            state.luminaires = action.payload
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        /*setLuminaire(state, action) {
            state.luminaire.id = action.payload.id
            state.luminaire.brand = action.payload.brand
            state.luminaire.lamp = action.payload.lamp
            state.luminaire.power = action.payload.power
        },*/
        setPickedLuminaire(state, action) {
            state.pickedLuminaire = action.payload
        },
        setLuminousFlux(state, action) {
            state.luminousFlux = action.payload
        },
        setMountingHeight(state, action) {
            debugger
            state.mountingHeight = action.payload
        },
        addParameter(state, action) {
            console.log(action.payload)
            // state.luminaireParameters.push({id:action.payload.id, name: action.payload.name})
        },
        addManufacturer(state, action) {
            //state.manufacturers.push({id:action.payload.id, name: action.payload.name})
        }
    }
})

export const getLuminaires = (currentPage, pageSize) => {
    return (dispatch) => {
        luminaireApi.getLuminaresPage(currentPage, pageSize)
            .then(data => {
                dispatch(getPage(data.Luminaires.Entities))
                dispatch(setCurrentPage(data.Luminaires.PageViewModel.PageNumber))
                dispatch(setTotalPages(data.Luminaires.PageViewModel.TotalPages))
            },
                er => console.log(er)
            )
    }
}

export const { getPage, setTotalPages, setCurrentPage, setPickedLuminaire, setLuminousFlux, setMountingHeight, addParameter, addManufacturer } = luminaireSlice.actions
export default luminaireSlice.reducer