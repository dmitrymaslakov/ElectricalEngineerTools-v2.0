import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import { thunkCreator } from '../../redux/room-slice'


class RoomContainer extends React.Component {
    componentDidMount() {
        this.props.thunkCreator()
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
}
let mapStateToProps = (state) => {
    return {
        room: state.room
    }
}

const RoomContainer = connect(mapStateToProps, { thunkCreator })(RoomContainer)

export default RoomContainer