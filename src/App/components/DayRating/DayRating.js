import { connect } from 'react-redux'
import { addDayRating, updateDayRating  } from '../../stateManagement/actions'
import DayRatingEl from './DayRatingEl'

const mapStateToProps = state => {
  console.log('dayrating map')
  return {
    ratingForCurrentDay: state.dayRatings.filter( item => item.day === state.dayToRate).pop(),
    dayToRate: state.dayToRate
  };
}


const mapDispatchToProps = dispatch => {
  return {};
}


const DayRating = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayRatingEl)

export default DayRating