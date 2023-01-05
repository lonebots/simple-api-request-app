import { SET_LOADING, GET_ALL_USERS, GET_SINGLE_USER } from '../types'

const initialState = {
    userList: [],
    loading: true,
    count: 0,
    user: {},

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                userList: [...action.payload.users],
                count: action.payload.count,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload.user,
            }

        default:
            return { ...state }


    }
}

export default userReducer;