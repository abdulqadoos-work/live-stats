import React from "react";
import {connect} from "react-redux"

import SignupView from "../../Views/Auth/SignupView";

import {signupRequest} from "../../../state/actions/authActions";

const SignupContainer = (props) => {
    return (
        <SignupView {...props}/>
    )
}
const mapStateToProps = state => {
    return {
        ...state.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signupRequest: formData => dispatch(signupRequest(formData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)