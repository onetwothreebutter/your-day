import { connect } from 'react-redux'
import { addDayRating, updateDayRating  } from '../../stateManagement/actions'
import DayRatingButtonEl from '../../components/dayRating/DayRatingButtonEl'

const mapStateToProps = state => {
  return {
    dayRating: state.dayRatings.filter( item => {
      return item.day === state.dayToRate;
    }),
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