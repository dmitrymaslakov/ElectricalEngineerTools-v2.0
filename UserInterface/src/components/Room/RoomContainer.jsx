import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import { updateLength, updateWidth, launchRoomDimensions } from '../../redux/room-slice'

let mapStateToProps = (state) => {
    return {
        roomDimensions: state.room.roomDimensions
    }
}

export default connect(mapStateToProps, { updateLength, updateWidth, launchRoomDimensions })(Room)

