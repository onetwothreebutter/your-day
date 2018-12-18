import { connect } from 'react-redux'
import { addDayRating, updateDayRating  } from '../../stateManagement/actions'
import DayRatingEl from '../../components/dayRating/DayRatingEl'

const mapStateToProps = state => {
  return state;
}


const mapDispatchToProps = dispatch => {
  return {};
}


const DayRating = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayRatingEl)

export default DayRating