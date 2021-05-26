import axios from "axios";

import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError
} from "./action";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const fetchContact = () => async (dispatch, getState) => {
  axios.defaults.headers.Authorization = `Bearer ${getState().userAuth.token}`;

  dispatch(fetchContactRequest());

  try {
    const responce = await axios.get("/contacts");
    dispatch(fetchContactSuccess(responce.data));
    console.log("TRY GET");
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};

const addContact = contact => async (dispatch, getState) => {
  axios.defaults.headers.Authorization = `Bearer ${getState().userAuth.token}`;

  dispatch(addContactRequest());

  try {
    const responce = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(responce.data));
    console.log("TRY POST");
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async (dispatch, getState) => {
  axios.defaults.headers.Authorization = `Bearer ${getState().userAuth.token}`;

  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export default { fetchContact, addContact, deleteContact };
