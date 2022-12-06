import React from 'react'
import { connect } from 'react-redux'
import LuminairesManagement from './LuminairesManagement'
import { getLuminaires } from '../../redux/launch-panel-slice'

class LuminairesManagementContainer extends React.Component {
    componentDidMount() {
        this.props.getLuminaires(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getLuminaires(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <LuminairesManagement
                luminaires={this.props.luminaires}
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
        luminaires: state.luminaireManagement.luminaires,
        pageSize: state.luminaireManagement.pageSize,
        totalPages: state.luminaireManagement.totalPages,
        currentPage: state.luminaireManagement.currentPage
    }
}

export default connect(mapStateToProps, { getLuminaires })(LuminairesManagementContainer)