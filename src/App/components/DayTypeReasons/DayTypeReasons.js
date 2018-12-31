import { connect } from 'react-redux'
import { addReason, deleteReason  } from '../../stateManagement/actions'
import DayTypeReasonsEl from "./DayTypeReasonsEl";

const mapStateToProps = state => {
  let ratingForCurrentDay = state.dayRatings.filter( dayRating => dayRating.day === state.dayToRate).pop();
  let reasonsForCurrentDay = state.reasons.filter( item => item.dayRatingId === ratingForCurrentDay.id);

  return {
    currentReasons: (typeof reasonsForCurrentDay !== 'undefined') ? reasonsForCurrentDay : {reasonType: null},
    dayRatingId: ratingForCurrentDay.id,
    ratingForCurrentDay: ratingForCurrentDay.dayRating
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addReason: (reasonType, dayRatingId) => {
      dispatch(addReason(reasonType, dayRatingId))
    },
    deleteReason: (reasonId) => {
      dispatch(deleteReason(reasonId))
    }
  }
}


const DayRatingButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayTypeReasonsEl)

export default DayRatingButton