import React from 'react'
import { connect } from 'react-redux'
import Luminaire from './Luminaire'
import { addParameter, addManufacturer, getLuminaires, setPickedLuminaire, setLuminousFlux, setMountingHeight } from '../../redux/luminaire-slice'

class LuminaireContainer extends React.Component {
    componentDidMount() {
        this.props.getLuminaires(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getLuminaires(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <Luminaire
                luminaires={this.props.luminaires}
                //luminaire={this.props.luminaire}
                pickedLuminaire={this.props.pickedLuminaire}
                luminousFlux={this.props.luminousFlux}
                mountingHeight={this.props.mountingHeight}
                luminaireParameters={this.props.luminaireParameters}
                pageSize={this.props.pageSize}
                totalPages={this.props.totalPages}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onLuminairePicked={this.props.setPickedLuminaire}
                onLuminousFluxChanged={this.props.setLuminousFlux}
                onMountingHeightChanged={this.props.setMountingHeight}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        luminaires: state.luminaire.luminaires,
        //luminaire: state.luminaire.luminaire,
        pickedLuminaire: state.luminaire.pickedLuminaire,
        luminousFlux: state.luminaire.luminousFlux,
        mountingHeight: state.luminaire.mountingHeight,
        luminaireParameters: state.luminaire.luminaireParameters,
        pageSize: state.luminaire.pageSize,
        totalPages: state.luminaire.totalPages,
        currentPage: state.luminaire.currentPage
    }
}

export default connect(mapStateToProps, { addParameter, addManufacturer, getLuminaires, setPickedLuminaire, setLuminousFlux, setMountingHeight })(LuminaireContainer)

