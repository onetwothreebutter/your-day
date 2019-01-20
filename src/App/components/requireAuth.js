import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (this.props.authenticated === null) {
        debugger
        this.context.router.history.push("/login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push("/login");
      }
    }

    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return null;
    }
  }

  function mapStateToProps(state) {
    console.log('myspecial state', state);
    return { authenticated: state.userInfo.loggedIn };
  }

  return connect(mapStateToProps)(Authentication);
}
