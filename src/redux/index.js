import { combineReducers } from "redux";
import userReducer from "./reducer/user";
// import BaiTapOanTuXiReducer from "./BaiTapOanTuXi/BaiTapOanTuXiReducer";

const rootReducer = combineReducers({
    userReducer,
    // BaiTapOanTuXiReducer
})

export default rootReducer