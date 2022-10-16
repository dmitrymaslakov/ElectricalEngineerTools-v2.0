import React from 'react'
import { connect } from 'react-redux'
import Luminaire from './Luminaire'
import {
    getLuminaires,
    setPickedLuminaire,
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
    setMountingHeight
} from '../../redux/luminaire-slice'

class LuminaireContainer extends React.Component {
    componentDidMount() {
        this.props.getLuminaires(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getLuminaires(pageNumber, this.props.pageSize)
    }

    onLuminaireDetailsChanged = () => {
        this.props.getLuminaires(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <Luminaire
                luminaires={this.props.luminaires}
                pickedLuminaire={this.props.pickedLuminaire}
                luminousFlux={this.props.luminousFlux}
                mountingHeight={this.props.mountingHeight}
                luminaireParameters={this.props.luminaireParameters}
                pageSize={this.props.pageSize}
                totalPages={this.props.totalPages}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onLuminaireDetailsChanged={this.onLuminaireDetailsChanged}
                onLuminairePicked={this.props.setPickedLuminaire}
                onLuminousFluxChanged={this.props.setLuminousFlux}
                onMountingHeightChanged={this.props.setMountingHeight}

                onManufacturerChanged={this.props.setManufacturer}
                onBrandChanged={this.props.setBrand}
                onLightSourceInfoChanged={this.props.setLightSourceInfo}
                onTechnicalSpecificationsChanged={this.props.setTechnicalSpecifications}
                onMountingChanged={this.props.setMounting}
                onClimateApplicationChanged={this.props.setClimateApplication}
                onDiffuserMaterialReacChanged={this.props.setDiffuserMaterial}
                onIPChanged={this.props.setIP}
                onEquipmentClassChanged={this.props.setEquipmentClass}
                onIsFireproofChanged={this.props.setIsFireproof}
                onIsExplosionProofChanged={this.props.setIsExplosionProof}
                onBPSUChanged={this.props.setBPSU}
                onDimensionsChanged={this.props.setDimensions}
                onLdtIesFileChanged={this.props.setLdtIesFile}
                onCableChanged={this.props.setCable}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        luminaires: state.luminaire.luminaires,
        pickedLuminaire: state.luminaire.pickedLuminaire,
        luminousFlux: state.luminaire.luminousFlux,
        mountingHeight: state.luminaire.mountingHeight,
        luminaireParameters: state.luminaire.luminaireParameters,
        pageSize: state.luminaire.pageSize,
        totalPages: state.luminaire.totalPages,
        currentPage: state.luminaire.currentPage
    }
}

export default connect(mapStateToProps, {
    getLuminaires,
    setPickedLuminaire,
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
    setMountingHeight
})(LuminaireContainer)

