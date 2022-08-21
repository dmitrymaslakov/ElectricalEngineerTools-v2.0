import {connect} from 'react-redux'
import Luminaire from './Luminaire'
import {addParameter, addManufacturer} from '../../redux/luminaire-slice'

let mapStateToProps = (state) => {
    return {
        luminaireParameters: state.luminaire.luminaireParameters
    }
}

const LuminaireContainer = connect(mapStateToProps, {addParameter, addManufacturer})(Luminaire)

export default LuminaireContainer