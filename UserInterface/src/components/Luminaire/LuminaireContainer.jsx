import React from 'react'
import {connect} from 'react-redux'
import Luminaire from './Luminaire'
import {addParameter, addManufacturer, thunkLum} from '../../redux/luminaire-slice'

let mapStateToProps = (state) => {
    return {
        luminaireParameters: state.luminaire.luminaireParameters
    }
}

const LuminaireContainer = connect(mapStateToProps, {addParameter, addManufacturer, thunkLum})(Luminaire)

export default LuminaireContainer