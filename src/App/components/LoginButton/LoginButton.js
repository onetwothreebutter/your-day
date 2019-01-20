import { connect } from 'react-redux';
import LoginButtonEl from "../LoginButton/LoginButtonEl";
import { signIn, signOut} from "../../stateManagement/actions";

const mapStateToProps = state => {
  return {
    user: state.userInfo.user,
    loggedIn: state.userInfo.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(signIn())
    },
    logout: () => {
      dispatch(signOut())
    }
  }
}

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonEl)

export default LoginButton