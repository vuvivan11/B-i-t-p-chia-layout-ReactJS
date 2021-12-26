let initialState = {
    mangDatCuoc: [
        { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", datCuoc: false },
        { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", datCuoc: true },
        { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", datCuoc: false },
    ],
    ketQua: "You Win !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png" }
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            // reset datCuoc
            let mangDatCuoc = [...state.mangDatCuoc]
            mangDatCuoc = mangDatCuoc.map((item) => {
                return { ...item, datCuoc: false }
            })
            const index = mangDatCuoc.findIndex((item) => item.ma === action.payload)
            if (index !== -1) {
                mangDatCuoc[index].datCuoc = true
            }
            state.mangDatCuoc = mangDatCuoc
        }
            return { ...state }

        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3)
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
            state.computer = { ...quanCuocNgauNhien }
            return { ...state }
        }

        case "END_GAME":
            state.soBanChoi += 1;
            let player = state.mangDatCuoc.find(item => item.datCuoc === true)
            let computer = state.computer
            switch (player.ma) {
                case "keo":
                    if (computer.ma === "keo") {
                        state.ketQua = "Draw !!!"
                    } else if (computer.ma === "bao") {
                        state.ketQua = "You Win !!!"
                        state.soBanThang += 1
                    } else {
                        state.ketQua = "You Lose !!!"
                    }
                    return { ...state }
                case "bao":
                    if (computer.ma === "keo") {
                        state.ketQua = "You Lose !!!"
                    } else if (computer.ma === "bao") {
                        state.ketQua = "Draw !!!"
                    } else {
                        state.ketQua = "You Win !!!"
                        state.soBanThang += 1
                    }
                    return { ...state }
                case "bua":
                    if (computer.ma === "keo") {
                        state.ketQua = "You Win !!!"
                        state.soBanThang += 1
                    } else if (computer.ma === "bao") {
                        state.ketQua = "You Lose !!!"
                    } else {
                        state.ketQua = "Draw !!!"
                    }
                    return { ...state }

                default:
                    state.ketQua = "You Win !!!"
            }
            
            return { ...state }

        default:
            return { ...state }
    }
}

export default counterReducer;