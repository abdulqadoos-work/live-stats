import { DEFAULT_VIEW, SET_VIEW, SIGNUP_FAILD, SIGNUP_START, SIGNUP_SUCCESS, VERIFICATION_START, VERIFICATION_SUCCESS, VERIFICATION_FAILD, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILD } from "../constants/authConstants";

const INITIAL_STATE = {
    authUser: null,
    isLoading: false,
    signupForm: null,
    validations: null,
    verification: true,
    activeView: DEFAULT_VIEW
};

const auth = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_VIEW:
            return {
                ...state,
                isLoading: false,
                activeView: action.view
            }

        case SIGNUP_START:
            return {
                ...state,
                isLoading: true
            }

        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authUser: action.result,
            };

        case SIGNUP_FAILD:
            return {
                ...state,
                isLoading: false,
                validations: action.validationResult,
            };


        case VERIFICATION_START:
            return {
                ...state,
                isLoading: true
            }

        case VERIFICATION_FAILD:
            return {
                ...state,
                isLoading: false,
                verification: false
            };

        case VERIFICATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };

        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authUser: action.result,
            };

        case LOGIN_FAILD:
            return {
                ...state,
                isLoading: false,
                validations: action.validationResult,
            };

        default: return state;
    }

};

export default auth;