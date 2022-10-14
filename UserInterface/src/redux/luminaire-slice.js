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
        { id: 2, name: 'Тип монтажа', value: ['Потолочный', 'Встраиваемый в Armstrong', 'Встраиваемый в гипсокартон', 'Подвесной'] },
        { id: 3, name: 'Источник света', value: ['Светодиодный модуль', 'Светодиодная лампа', 'Люминесцентная лампа', 'Лампа накаливания'] },
        { id: 4, name: 'Количество ламп в светильнике', value: [1, 2, 3, 4] },
        { id: 5, name: 'Климатическое исполнение', value: ['УХЛ1', 'УХЛ2', 'УХЛ4', 'УХЛ5'] },
        { id: 6, name: 'Остальные параметры', value: ['Пылевлагозащищенный', 'Пожаробезопасный', 'Взрывобезопасный', 'БАП'] }
    ],
    pickedLuminaire: {
        /*Id: -1,
        Manufacturer: { name: 'Производитель', value: '' },
        Brand: {name: 'Марка', value: ''},
        LightSourceInfo: { LightSourceType: { name: 'Источник света', value: '' }, Power: { name: 'Мощность', value: '' } },
        TechnicalSpecifications: {name: 'Технические условия', value: ''},
        Mounting: { MountingType: {name: 'Тип монтажа', value: ''}, MountingSubtype: {name: 'Способ монтажа', value: ''} },
        ClimateApplication: {name: 'Климатическое исполнение', value: ''},
        DiffuserMaterial: {name: 'Рассеиватель', value: ''},
        IP: {name: 'Степень защиты', value: ''},
        EquipmentClass: {name: 'Класс защиты электрооборудования', value: ''},
        IsFireproof: {name: 'Пожаробезопасность', value: false},
        IsExplosionProof: {name: 'Взрывобезопасность', value: false},
        BPSU: {name: 'БАП', value: false},
        Dimensions: { Length: {name: 'Длина', value: ''}, Width: {name: 'Ширина', value: ''}, Diameter: {name: 'Диаметр', value: ''} },
        LdtIesFile: {name: 'Файл формата Ldt или Ies', value: ''},
        Cable: { Brand: {name: 'Марка', value: ''}, CoresNumber: {name: 'Число жил', value: -1}, Section: {name: 'Сечение', value: ''} }*/
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
            /*state.pickedLuminaire.Id = action.payload.Id
            state.pickedLuminaire.Brand.value = action.payload.Brand
            state.pickedLuminaire.LightSourceInfo.LightSourceType.value = action.payload.LightSourceInfo.LightSourceType
            state.pickedLuminaire.LightSourceInfo.Power.value = action.payload.LightSourceInfo.Power
            state.pickedLuminaire.TechnicalSpecifications.value = action.payload.TechnicalSpecifications
            state.pickedLuminaire.Mounting.MountingType.value = action.payload.MountingType
            state.pickedLuminaire.Mounting.MountingSubtype.value = action.payload.MountingSubtype
            state.pickedLuminaire.ClimateApplication.value = action.payload.ClimateApplication
            state.pickedLuminaire.DiffuserMaterial.value = action.payload.DiffuserMaterial
            state.pickedLuminaire.IP.value = action.payload.IP
            state.pickedLuminaire.EquipmentClass.value = action.payload.EquipmentClass
            state.pickedLuminaire.IsFireproof.value = action.payload.IsFireproof
            state.pickedLuminaire.IsExplosionProof.value = action.payload.IsExplosionProof
            state.pickedLuminaire.BPSU.value = action.payload.BPSU
            state.pickedLuminaire.Dimensions.Length.value = action.payload.Dimensions.Length
            state.pickedLuminaire.Dimensions.Width.value = action.payload.Dimensions.Width
            state.pickedLuminaire.Dimensions.Diameter.value = action.payload.Dimensions.Diameter
            state.pickedLuminaire.LdtIesFile.value = action.payload.LdtIesFile
            state.pickedLuminaire.Cable.Brand.value = action.payload.Cable.Brand
            state.pickedLuminaire.Cable.CoresNumber.value = action.payload.Cable.CoresNumber
            state.pickedLuminaire.Cable.Section.value = action.payload.Cable.Section*/
        },
        setLuminousFlux(state, action) {
            state.luminousFlux = action.payload
        },
        setMountingHeight(state, action) {
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