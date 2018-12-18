import { connect } from 'react-redux'
import { addDayRating, updateDayRating  } from '../../stateManagement/actions'
import DayRatingButtonEl from '../../components/dayRating/DayRatingButtonEl'

const mapStateToProps = state => {
  let ratingForCurrentDay = state.dayRatings.filter( item => item.day === state.dayToRate).pop();
  return {
    dayRating: (typeof ratingForCurrentDay !== 'undefined') ? ratingForCurrentDay : {dayRating: null},
    dayToRate: state.dayToRate
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addDayRating: (rating, dayToRate) => {
      dispatch(addDayRating(rating, dayToRate))
    },
    updateDayRating: (rating, dayToRate) => {
      dispatch(updateDayRating(rating, dayToRate))
    }
  }
}


const DayRatingButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayRatingButtonEl)

export default DayRatingButton