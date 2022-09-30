import React from 'react'
import { connect } from 'react-redux'
import Luminaire from './Luminaire'
import { addParameter, addManufacturer, getLuminaires } from '../../redux/luminaire-slice'

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
                luminaireParameters={this.props.luminaireParameters}
                pageSize={this.props.pageSize}
                totalPages={this.props.totalPages}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        luminaires: state.luminaire.luminaires,
        luminaireParameters: state.luminaire.luminaireParameters,
        pageSize: state.luminaire.pageSize,
        totalPages: state.luminaire.totalPages,
        currentPage: state.luminaire.currentPage
    }
}

export default connect(mapStateToProps, { addParameter, addManufacturer, getLuminaires })(LuminaireContainer)

