let initialState = {
    userList: [
        {
            "id": 1,
            "fullname": "Dinh Phuc Nguyen",
            "username": "dpnguyen",
            "email": "dpnguyen@gmail.com",
            "phoneNumber": "123456789",
            "type": "VIP"
        },
        {
            "id": 2,
            "fullname": "Nguyen Van A",
            "username": "vana",
            "email": "vana@gmail.com",
            "phoneNumber": "123456789",
            "type": "USER"
        }
    ],
    keyword: "",
    userEdit: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_USER": {
            // xóa user
            let userList = [...state.userList]
            const index = userList.findIndex((user) => user.id === action.payload.id)
            if (index !== -1) {
                userList.splice(index, 1)
                // cập nhập lại state
                state.userList = userList
            }
            return { ...state }
        };

        case "SUBMIT_USER": {
            let userList = [...state.userList];
            if (action.payload.id) {
                // update user
                const index = userList.findIndex((user) => user.id === action.payload.id)
                if(index !== -1){
                    userList[index] = action.payload
                }
            } else {
                // add user
                const newUser = { ...action.payload, id: new Date().getTime() }
                userList.push(newUser)
            }
            state.userList = userList

            return { ...state }
        };

        case "EDIT_USER": {
            state.userEdit = action.payload
            return { ...state }
        }

        case "SEARCH_USER": {
            state.keyword = action.payload
            return { ...state }
        }

        default:
            return { ...state }
    }
}
export default userReducer