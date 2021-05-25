import axios from "axios";
import httpClient from "../axios/axios";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUser
} from "./authActions";

const register = user => async dispatch => {
  //   dispatch(registerUserRequest());

  try {
    const responce = await httpClient.post("/users/signup", user);
    dispatch(registerUserSuccess(responce.data));
  } catch (error) {
    dispatch(registerUserError(error));
  }
};

const login = user => async dispatch => {
  //   dispatch(loginUserRequest());

  try {
    const responce = await httpClient.post("/users/login", user);
    dispatch(loginUserSuccess(responce.data));
  } catch (error) {
    dispatch(loginUserError(error));
  }
};

export default { register, login };
