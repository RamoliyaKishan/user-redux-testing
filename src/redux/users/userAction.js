import { ADD_USER , EDIT_USER, GET_USER, DELETE_USER, DELETE_ALL_USERS} from './userType'

export const addUser = (user) => ({
    type: ADD_USER,
    payload : user,
})

export const getUser = (id) => ({
    type: GET_USER,
    payload: id
})

export const editUser = (user) => ({
    type: EDIT_USER,
    payload: user
})

export const deleteUser = (id) => ({
    type: DELETE_USER,
    payload: id
})

export const deleteAllUsers = () => ({
    type: DELETE_ALL_USERS,
})
