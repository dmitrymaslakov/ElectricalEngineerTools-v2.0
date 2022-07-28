import React from 'react'
import { connect } from 'react-redux'
import Room from './Room'
import { thunkCreator } from '../../redux/room-slice'

class RoomContainer extends React.Component {

    onRoomChanged = () => {
        console.log('Dimmu')
        this.props.thunkCreator()
    }

    render() {
        return <>
            <Room onRoomChanged={this.onRoomChanged}></Room>
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        room: state.room
    }
}

export default connect(mapStateToProps, { thunkCreator })(RoomContainer)

