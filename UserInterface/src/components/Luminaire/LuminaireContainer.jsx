import React from 'react'
import {connect} from 'react-redux'
import Luminaire from './Luminaire'
import {addParameter, addManufacturer} from '../../redux/luminaire-slice'

let mapStateToProps = (state) => {
    return {
        luminaireParameters: state.luminaire.luminaireParameters
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        addParameter: (parameter) => {dispatch(addParameter(parameter))},
        addManufacturer: (manufacturer) => {dispatch(addManufacturer(manufacturer))}
    }
}

const LuminaireContainer = connect(mapStateToProps, mapDispatchToProps)(Luminaire)

export default LuminaireContainer