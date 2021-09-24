import { combineReducers } from "redux";
import userReducer from './users/userReducer'

// export default combineReducers({
//     users : userReducer,
// })

const rootReducer = combineReducers({
    users:userReducer,
})

export default rootReducer;