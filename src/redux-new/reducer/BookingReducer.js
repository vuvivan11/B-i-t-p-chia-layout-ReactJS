import * as ActionType from "../actions-type/bookingType"

const initialState = {
    danhSachGheDangDat: [
        // {"soGhe":"A1","gia":75000,"daDat":false}

    ]
}

const BookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GHE_DANG_CHON: {
            let gheDangDat = [...state.danhSachGheDangDat]
            let index = gheDangDat.findIndex(gheDangChon => gheDangChon.soGhe === action.payload.soGhe);
            if (index !== -1) {
                gheDangDat.splice(index, 1)
            } else {
                gheDangDat.push(action.payload)
            }
            state.danhSachGheDangDat = gheDangDat
        }
            return { ...state }

        case ActionType.HUY_GHE: {
            let gheHuy = [...state.danhSachGheDangDat]
            let index = gheHuy.findIndex(gheHuy => gheHuy.soGhe === action.payload)
            if (index !== -1) {
                gheHuy.splice(index, 1)
            }
            state.danhSachGheDangDat = gheHuy
        }
            return { ...state }

        default:
            return { ...state }
    }
}

export default BookingReducer