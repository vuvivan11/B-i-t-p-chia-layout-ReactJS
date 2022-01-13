import * as ActionType from "../actions-type/bookingType"

export const actDatGhe = (ghe) => {
    return {
        type: ActionType.GHE_DANG_CHON,
        payload: ghe
    }
}

export const actHuyGhe = (soGhe) => {
    return {
        type: ActionType.HUY_GHE,
        payload: soGhe
    }
}