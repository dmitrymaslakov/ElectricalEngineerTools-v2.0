import { connect } from 'react-redux'
import Room from './Room'
import { updateLength, updateWidth, updateArea, launchRoomDimensions } from '../../redux/room-slice'

let mapStateToProps = (state) => {
    return {
        dimensions: state.room.dimensions,
        area: state.room.area
    }
}

export default connect(mapStateToProps, { updateLength, updateWidth, updateArea, launchRoomDimensions })(Room)

