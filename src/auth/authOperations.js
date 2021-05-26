import axios from "axios";
// import httpClient from "../axios/axios";
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

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const register = user => async dispatch => {
  //   dispatch(registerUserRequest());

  try {
    const responce = await axios.post("/users/signup", user);
    dispatch(registerUserSuccess(responce.data));
  } catch (error) {
    dispatch(registerUserError(error));
  }
};

const login = user => async dispatch => {
  //   dispatch(loginUserRequest());

  try {
    const responce = await axios.post("/users/login", user);
    dispatch(loginUserSuccess(responce.data));
  } catch (error) {
    dispatch(loginUserError(error));
  }
};

const logout = () => async (dispatch, getState) => {
  axios.defaults.headers.Authorization = `Bearer ${getState().userAuth.token}`;

  //   dispatch(logoutUserRequest());

  try {
    await axios.post("/users/logout");
    axios.defaults.headers.Authorization = `Bearer `;
    dispatch(logoutUserSuccess());
  } catch (error) {
    dispatch(logoutUserError(error));
  }
};

const currentUser = () => async (dispatch, getState) => {
  const {
    userAuth: { token: persistedToken }
  } = getState();

  if (!persistedToken) return;

  axios.defaults.headers.Authorization = `Bearer ${persistedToken}`;

  //   dispatch(currentUserRequest());

  try {
    const responce = await axios.get("/users/current");
    dispatch(currentUserSuccess(responce.data));
  } catch (error) {
    // dispatch(currentUserError(error));
  }
};

export default { register, login, logout, currentUser };
