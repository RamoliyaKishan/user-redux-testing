import { ADD_USER, GET_USER, EDIT_USER,DELETE_USER, DELETE_ALL_USERS} from './userType'

const usersList = {
    users:[],
    oneUser:[]
}

const userReducer = (state = usersList , action) => {
    switch(action.type) {
        
        case ADD_USER: 
            return {
                ...state,
                users:[action.payload, ...state.users]
            };

        case GET_USER:
            return {
                ...state,
                oneUser : state.users.find(u => u.id === action.payload)
            }
        
        case EDIT_USER: 
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.id ? action.payload : u)
            }

        case DELETE_USER: 
            return {
                ...state,
                users: state.users.filter(u => u.id !== action.payload)
            }
        
        case DELETE_ALL_USERS: 
            return {
                ...state,
                users:[]
            }

        default :
            return state;
    }
}

export default userReducer;