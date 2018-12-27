import { connect } from 'react-redux'
import { addReason, deleteReason  } from '../../stateManagement/actions'
import DayTypeReasonsEl from "./DayTypeReasonsEl";

const mapStateToProps = state => {
  let reasonsForCurrentDay = state.reasons.filter( item => item.day === state.dayToRate);
  let ratingForCurrentDay = state.dayRatings.filter( item => item.day === state.dayToRate).pop();
  return {
    currentReasons: (typeof reasonsForCurrentDay !== 'undefined') ? reasonsForCurrentDay : {reasonId: null},
    dayToRate: state.dayToRate,
    ratingForCurrentDay: (typeof ratingForCurrentDay !== 'undefined') ? ratingForCurrentDay.dayRating : null
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addReason: (reasonId, dayToRate, dayRating) => {
      dispatch(addReason(reasonId, dayToRate, dayRating))
    },
    deleteReason: (reasonId, dayToRate, dayRating) => {
      dispatch(deleteReason(reasonId, dayToRate, dayRating))
    }
  }
}


const DayRatingButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayTypeReasonsEl)

export default DayRatingButton