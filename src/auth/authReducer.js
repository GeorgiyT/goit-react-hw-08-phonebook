import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError
} from "./authActions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerUserSuccess]: (_, { payload }) => payload.user,
  [loginUserSuccess]: (_, { payload }) => payload.user
});

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token
});

const error = createReducer(null, {
  [registerUserError]: (_, { payload }) => payload.message,
  [loginUserError]: (_, { payload }) => payload.message
});

export default combineReducers({
  user,
  token,
  error
});
