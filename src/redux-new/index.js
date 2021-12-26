import { combineReducers } from "redux"
import userReducer from "./reducer/user"
import counterReducer from "./reducer/BaiTapOanTuXiReducer"


const rootReducer = combineReducers({
    userReducer,
    counterReducer
})

export default rootReducer