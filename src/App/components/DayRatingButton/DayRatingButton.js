import { connect } from 'react-redux'
import { addDayRating, updateDayRating, deleteReasonsForDayRating  } from '../../stateManagement/actions'
import DayRatingButtonEl from './DayRatingButtonEl'

const mapStateToProps = state => {
  let ratingForCurrentDay = {
    id: null,
    dayRating: null
  };
  for (const key of Object.keys(state.dayRatings)) {
    if(state.dayRatings[key].day === state.dayToRate) {
      ratingForCurrentDay.id = key;
      ratingForCurrentDay.dayRating = Object.assign({}, state.dayRatings[key]);
    }
  }

  return {
    userId: state.userInfo.user.uid,
    id: ratingForCurrentDay.id,
    dayRating: ratingForCurrentDay.dayRating,
    dayToRate: state.dayToRate
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addDayRating: (rating, dayToRate, userId) => {
      dispatch(addDayRating(rating, dayToRate, userId))
    },
    updateDayRating: (id, rating) => {
      dispatch(updateDayRating(id, rating));
      //dispatch(deleteReasonsForDayRating(id));
    },
  }
}


const DayRatingButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayRatingButtonEl)

export default DayRatingButton