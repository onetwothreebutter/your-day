import { connect } from 'react-redux'
import { addDayRating, updateDayRating, deleteReasonsForDayRating  } from '../../stateManagement/actions'
import DayRatingButtonEl from './DayRatingButtonEl'

const mapStateToProps = state => {
  let ratingForCurrentDay = state.dayRatings.filter( item => item.day === state.dayToRate).pop();
  return {
    id: (typeof ratingForCurrentDay !== 'undefined') ? ratingForCurrentDay.id : null,
    dayRating: (typeof ratingForCurrentDay !== 'undefined') ? ratingForCurrentDay : {dayRating: null},
    dayToRate: state.dayToRate
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addDayRating: (rating, dayToRate) => {
      dispatch(addDayRating(rating, dayToRate))
    },
    updateDayRating: (id, rating, dayToRate) => {
      dispatch(updateDayRating(id, rating, dayToRate));
      dispatch(deleteReasonsForDayRating(id));
    },
  }
}


const DayRatingButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayRatingButtonEl)

export default DayRatingButton