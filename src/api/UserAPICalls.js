import axios from "axios";
import { setLoading } from '../redux/User/user.actions'

// for getting all the users
export const requestAllUsers = async (page) => {
    try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`)
        setLoading(false);

        return {
            users: response.data.data,
            count: response.data.total
        }
    } catch (error) {
        console.log(error)
    }
}

// for getting individual users
export const requestSingleUser = async (userId) => {
    try {
        setLoading(true)
        const response = await axios.get(`https://reqres.in/api/users/${userId}`)
        setLoading(false)
        return {
            user: response.data.data,
        }
    } catch (error) {
        console.log(error)
    }
}
