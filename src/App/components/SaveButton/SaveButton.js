import { connect } from 'react-redux';
import SaveButtonEl from "../SaveButton/SaveButtonEl";
import { saveDayRating } from "../../stateManagement/actions";

const mapStateToProps = state => {
  return {
    dayRating: state.dayRatings.filter( () => {
      //TODO: left off here
    }),
    uid: state.userInfo.uid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    save: (dayRating, uid) => {
      dispatch(saveDayRating(dayRating, uid))
    }
  }
}

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveButtonEl)

export default LoginButton