const initialState = {
    danhSachCuoc: [
        { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png", diemCuoc: 0 },
        { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png", diemCuoc: 0 },
        { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png", diemCuoc: 0 },
        { ma: "ca", hinhAnh: "./img/BaiTapGameBauCua/ca.png", diemCuoc: 0 },
        { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png", diemCuoc: 0 },
        { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png", diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucSac: [
        { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png" },
        { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png" },
        { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png" },
    ]
}


const GameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DAT_CUOC_BAU_CUA": {
            const danhSachCuocUpdate = [...state.danhSachCuoc]
            // tim vi tri
            const index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.payload.ma);
            if (index !== -1) {
                if (action.tangGiam) {
                    if (state.tongDiem > 0) {
                        danhSachCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100
                    }
                } else {
                    if (danhSachCuocUpdate[index].diemCuoc > 0) {
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100
                    }
                }
            }
            state.danhSachCuoc = danhSachCuocUpdate
            return { ...state }
        }


        case "PLAY_GAME": {
            const mangXucSacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                const soNgauNhien = Math.floor(Math.random() * 6);
                const xucSacNgauNhien = state.danhSachCuoc[soNgauNhien];
                mangXucSacNgauNhien.push(xucSacNgauNhien);
            }
            state.mangXucSac = mangXucSacNgauNhien;

            mangXucSacNgauNhien.forEach((item) => {
                const index = state.danhSachCuoc.findIndex(qc => qc.ma === item.ma);
                if(index !== -1){
                    state.tongDiem += state.danhSachCuoc[index].diemCuoc;
                }
            })

            state.danhSachCuoc.forEach((item) => {
                const index = mangXucSacNgauNhien.findIndex(qc => qc.ma === item.ma)
                if(index !== -1){
                    state.tongDiem += item.diemCuoc
                }
            })
            

            state.danhSachCuoc = state.danhSachCuoc.map((item) => {
                return {...item, diemCuoc: 0}
            })
            return { ...state }
        }

        case "CHOI_LAI": {
            state.tongDiem = 1000
            state.danhSachCuoc = state.danhSachCuoc.map((item) => {
                return {...item, diemCuoc: 0}
            })
            return {...state}
        }

        default:
            return { ...state }
    }
}

export default GameBauCuaReducer