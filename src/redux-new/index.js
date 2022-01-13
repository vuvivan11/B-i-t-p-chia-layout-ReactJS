import { combineReducers } from "redux"
import userReducer from "./reducer/user"
import counterReducer from "./reducer/BaiTapOanTuXiReducer"
import BookingReducer from "./reducer/BookingReducer";
import GameBauCuaReducer from "./reducer/GameBauCuaReducer";



const rootReducer = combineReducers({
    userReducer,
    counterReducer,
    BookingReducer,
    GameBauCuaReducer,
})

export default rootReducer