import { connect } from 'react-redux'
import Room from './Room'
import { 
    updateLength, 
    updateWidth, 
    updateArea,
    updatePcPwPws,
    updateWorkingSurfaceHeight,
    updateSafetyFactor,
    updateNumberAlongX,
    updateNumberAlongY,
    launchRoomDimensions 
} from '../../redux/room-slice'

let mapStateToProps = (state) => {
    return {
        length: state.room.Length,
        width: state.room.Width,
        area: state.room.Area,
        illuminance: state.room.Illuminance,
        PcPwPwsList: state.room.PcPwPwsList,
        workingSurfaceHeight: state.room.WorkingSurfaceHeight,
        safetyFactor: state.room.SafetyFactor,
        numberAlongX: state.room.NumberAlongX,
        numberAlongY: state.room.NumberAlongY
    }
}

export default connect(mapStateToProps, 
    { 
        updateLength, 
        updateWidth, 
        updateArea, 
        updatePcPwPws,
        updateWorkingSurfaceHeight,
        updateSafetyFactor,
        updateNumberAlongX,
        updateNumberAlongY,
        launchRoomDimensions })(Room)