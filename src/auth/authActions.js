import { createAction } from "@reduxjs/toolkit";

export const registerUserRequest = createAction("registerUserRequest");
export const registerUserSuccess = createAction("registerUserSuccess");
export const registerUserError = createAction("registerUserError");

export const loginUserRequest = createAction("loginUserRequest");
export const loginUserSuccess = createAction("loginUserSuccess");
export const loginUserError = createAction("loginUserError");

export const logoutUser = createAction("logoutUser");
