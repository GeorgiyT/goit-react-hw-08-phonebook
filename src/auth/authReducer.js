import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  currentUserRequest,
  currentUserSuccess,
  currentUserError
} from "./authActions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerUserSuccess]: (_, { payload }) => payload.user,
  [loginUserSuccess]: (_, { payload }) => payload.user,
  [logoutUserSuccess]: (_, __) => initialUserState,
  [currentUserSuccess]: (_, { payload }) => payload
});

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
  [logoutUserSuccess]: (_, __) => null
});

const error = createReducer(null, {
  [registerUserError]: (_, { payload }) => payload.message,
  [loginUserError]: (_, { payload }) => payload.message,
  [logoutUserError]: (_, { payload }) => payload.message,
  [currentUserError]: (_, { payload }) => payload.message
});

export default combineReducers({
  user,
  token,
  error
});
