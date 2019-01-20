import { connect } from 'react-redux';
import LoginPageEl from "./LoginPage/LoginPageEl";
import { signIn, signOut} from "../../stateManagement/actions";

const mapStateToProps = state => {

  return {
    user: state.user,
    loggedIn: state.loggedIn
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

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonEl)

export default LoginPage