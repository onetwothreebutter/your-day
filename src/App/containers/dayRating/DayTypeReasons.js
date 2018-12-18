import { connect } from 'react-redux'
import { addReason, deleteReason  } from '../../stateManagement/actions'
import DayTypeReasonsEl from "../../components/dayRating/DayTypeReasonsEl";

const mapStateToProps = state => {
  let reasonsForCurrentDay = state.reasons.filter( item => item.day === state.dayToRate);
  return {
    reasons: (typeof reasonsForCurrentDay !== 'undefined') ? reasonsForCurrentDay : {reasonId: null},
    dayToRate: state.dayToRate
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addReason: (reasonId, dayToRate) => {
      dispatch(addReason(reasonId, dayToRate))
    },
    deleteReason: (reasonId, dayToRate) => {
      dispatch(deleteReason(reasonId, dayToRate))
    }
  }
}


const DayRatingButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayTypeReasonsEl)

export default DayRatingButton