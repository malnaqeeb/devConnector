import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  SOCIAL_REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  SEND_FRIENDREQUEST,
  CANCEL_REQUEST
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case SOCIAL_REGISTER_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };

    case SEND_FRIENDREQUEST:
      return {
        ...state,
        user: {
          ...state.user,
          friendRequests: [...state.user.friendRequests, payload]
        }
      };

    case CANCEL_REQUEST:
      return {
        ...state,
        user: {
          ...state.user,
          friendRequests: state.user.friendRequests.filter(
            (request) => request.user !== payload.user
          )
        }
      };

    default:
      return state;
  }
};
