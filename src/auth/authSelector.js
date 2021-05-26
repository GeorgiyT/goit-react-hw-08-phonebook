// import { createSelector } from "@reduxjs/toolkit";

export const isAuthenticated = state => Boolean(state.userAuth.token);
export const getUserEmail = state => state.userAuth.user.email;

// .userAuth.token
