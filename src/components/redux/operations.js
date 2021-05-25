import axios from "axios";
import httpClient from "../../axios/axios";
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

const fetchContact = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const responce = await httpClient.get("/contacts");
    dispatch(fetchContactSuccess(responce.data));
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
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await httpClient.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export default { fetchContact, addContact, deleteContact };
