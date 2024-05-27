import { USER_ACTIONS } from "./user.types";
import { createAction } from "../../Utils/Reducer/reducer.utils";
import { toast } from 'react-toastify';

export const setCurrentUser = (user) => {
  return createAction(USER_ACTIONS.SET_CURRENT_USER, user);
};

/*
  CHECK_USER_SESSION: "user/CHECK_USER_SESSION",
  GOOGLE_SIGN_IN_START: "user/GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START: "user/EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS: "user/SIGN_IN_SUCCESS",
  SIGN_IN_FAILED: "user/SIGN_IN_FAILED"
 */

export const checkUserSession = () => {
  return createAction(USER_ACTIONS.CHECK_USER_SESSION);
};

export const googleSignInStart = () => {
  return createAction(USER_ACTIONS.GOOGLE_SIGN_IN_START);
};

export const emailSignInStart = (email, password) => {
  return createAction(USER_ACTIONS.EMAIL_SIGN_IN_START, { email, password });
};

export const signInSuccess = (user) => {
  toast.success('Sign In successful!');
  return createAction(USER_ACTIONS.SIGN_IN_SUCCESS, user)
};

export const signInFailed = (error) => {
  toast.error('Sign In failed. Please try again.')
  return createAction(USER_ACTIONS.SIGN_IN_FAILED, error);
};

export const signUpStart = (email, password, displayName) => {
  return createAction(USER_ACTIONS.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};

export const signUpSuccess = (user, additionalDetails) => {
  toast.success('Sign up successful!');
  return createAction(USER_ACTIONS.SIGN_UP_SUCCESS, {
    user,
    additionalDetails,
  });
};

export const signUpFailed = (error) => {
  toast.error('Sign up failed. Please try again.')
  return createAction(USER_ACTIONS.SIGN_UP_FAILED, error);
};

export const signOutStart = () => {
  return createAction(USER_ACTIONS.SIGN_OUT_START);
};

export const signOutSuccess = () => {
  return createAction(USER_ACTIONS.SIGN_OUT_SUCCESS);
};

export const signOutFailed = (error) => {
  return createAction(USER_ACTIONS.SIGN_OUT_FAILED, error);
};
