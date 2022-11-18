import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { luminaireApi } from '../api/api'

const initialState = {
    luminaires: [],
    pageSize: 5,
    totalPages: 0,
    currentPage: 1,
    luminaireParameters: [
        { id: 0, name: 'Производитель', value: ['SVS-Lighting', 'Lighting Technologies', 'ЗАО Белинтегра'] },
        { id: 1, name: 'Форма', value: ['Прямоугольный', 'Квадрат'] },
        { id: 2, name: 'Тип монтажа', value: ['Потолочный', 'Встраиваемый в Armstrong', 'Встраиваемый в гипсокартон', 'Подвесной'] },
        { id: 3, name: 'Источник света', value: ['Светодиодный модуль', 'Светодиодная лампа', 'Люминесцентная лампа', 'Лампа накаливания'] },
        { id: 4, name: 'Количество ламп в светильнике', value: [1, 2, 3, 4] },
        { id: 5, name: 'Климатическое исполнение', value: ['УХЛ1', 'УХЛ2', 'УХЛ4', 'УХЛ5'] },
        { id: 6, name: 'Остальные параметры', value: ['Пылевлагозащищенный', 'Пожаробезопасный', 'Взрывобезопасный', 'БАП'] }
    ],
    pickedLuminaire: {},
    changedLuminaireParameters: {},
    luminousFlux: 1000,
    mountingHeight: 2.5,
}

const luminaireSlice = createSlice({
    name: 'luminaire',
    initialState,
    reducers: {
        getPage(state, action) {
            state.luminaires = action.payload
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setPickedLuminaire(state, action) {
            state.pickedLuminaire = action.payload
        },
        updateLuminaire(state, action) {
            //state.luminaires.map(l => l.Id === action.payload.Id ? action.payload : l)
            state.luminaires = state.luminaires.map(l => l.Id === action.payload.Id ? action.payload : l)
            console.log(state.luminaires[0])
            console.log(state.luminaires)
            console.log(action.payload)
        },
        setLuminousFlux(state, action) { state.luminousFlux = action.payload },
        setManufacturer(state, action) {
            state.pickedLuminaire.Manufacturer = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.Manufacturer = state.pickedLuminaire.Manufacturer
        },
        setBrand(state, action) {
            state.pickedLuminaire.Brand = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.Brand = state.pickedLuminaire.Brand
        },
        setLightSourceInfo(state, action) {
            state.pickedLuminaire.LightSourceInfo = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.LightSourceInfo = state.pickedLuminaire.LightSourceInfo
        },
        setTechnicalSpecifications(state, action) {
            state.pickedLuminaire.TechnicalSpecifications = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.TechnicalSpecifications = state.pickedLuminaire.TechnicalSpecifications
        },
        setMounting(state, action) {
            state.pickedLuminaire.Mounting = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.Mounting = state.pickedLuminaire.Mounting
        },
        setClimateApplication(state, action) {
            state.pickedLuminaire.ClimateApplication = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.ClimateApplication = state.pickedLuminaire.ClimateApplication
        },
        setDiffuserMaterial(state, action) {
            state.pickedLuminaire.DiffuserMaterial = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.DiffuserMaterial = state.pickedLuminaire.DiffuserMaterial
        },
        setIP(state, action) {
            state.pickedLuminaire.IP = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.IP = state.pickedLuminaire.IP
        },
        setEquipmentClass(state, action) {
            state.pickedLuminaire.EquipmentClass = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.EquipmentClass = state.pickedLuminaire.EquipmentClass
        },
        setIsFireproof(state, action) {
            state.pickedLuminaire.IsFireproof = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.IsFireproof = state.pickedLuminaire.IsFireproof
        },
        setIsExplosionProof(state, action) {
            state.pickedLuminaire.IsExplosionProof = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.IsExplosionProof = state.pickedLuminaire.IsExplosionProof
        },
        setBPSU(state, action) {
            state.pickedLuminaire.BPSU = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.BPSU = state.pickedLuminaire.BPSU
        },
        setDimensions(state, action) {
            state.pickedLuminaire.Dimensions = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.Dimensions = state.pickedLuminaire.Dimensions
        },
        setLdtIesFile(state, action) {
            state.pickedLuminaire.LdtIesFile = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.LdtIesFile = state.pickedLuminaire.LdtIesFile
        },
        setCable(state, action) {
            state.pickedLuminaire.Cable = action.payload
            state.changedLuminaireParameters.Id = state.pickedLuminaire.Id
            state.changedLuminaireParameters.Cable = state.pickedLuminaire.Cable
        },

        setMountingHeight(state, action) { state.mountingHeight = action.payload },
    },
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

export const postChangedLuminaire = (luminaire) => {
    return (dispatch) => {
        luminaireApi.postLuminare(luminaire)
            .then(data => {
                dispatch(updateLuminaire(data))
                //dispatch(updateLuminaire({lamp: 'kfvg'}))
            },
                er => console.log(er)
            )
    }
}

export const {
    getPage,
    setTotalPages,
    setCurrentPage,
    setPickedLuminaire,
    updateLuminaire,
    setLuminousFlux,
    setManufacturer,
    setBrand,
    setLightSourceInfo,
    setTechnicalSpecifications,
    setMounting,
    setClimateApplication,
    setDiffuserMaterial,
    setIP,
    setEquipmentClass,
    setIsFireproof,
    setIsExplosionProof,
    setBPSU,
    setDimensions,
    setLdtIesFile,
    setCable,
    setMountingHeight } = luminaireSlice.actions
export default luminaireSlice.reducer