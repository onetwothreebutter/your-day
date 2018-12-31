import { connect } from 'react-redux'
import RatingHistoryEl from "./RatingHistoryEl";

const mapStateToProps = state => {
  return {
    allRatings: state.dayRatings,
  }
}


// const mapDispatchToProps = dispatch => {
//   return {
//     addReason: (reasonType, dayRatingId) => {
//       dispatch(addReason(reasonType, dayRatingId))
//     },
//     deleteReason: (reasonId) => {
//       dispatch(deleteReason(reasonId))
//     }
//   }
// }


const RatingHistory = connect(
  mapStateToProps,
  // mapDispatchToProps
)(RatingHistoryEl)

export default RatingHistory