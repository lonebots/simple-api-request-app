import { SET_LOADING, GET_ALL_USERS, GET_SINGLE_USER } from "../types";
import { dispatch } from '../store'
import { requestAllUsers, requestSingleUser } from "../../api/UserAPICalls";

// loading action
export const setLoading = (state) => {
    dispatch({ type: SET_LOADING, payload: state });
}

// get list of users
export const getAllUsers = async (page) => {
    const responseData = await requestAllUsers(page);
    // console.log(responseData)
    dispatch({ type: GET_ALL_USERS, payload: { users: responseData.users, count: responseData.count } })
}

// get single user 
export const getSingleUser = async (userId) => {
    const userData = await requestSingleUser(userId);
    dispatch({ type: GET_SINGLE_USER, payload: userData })
}