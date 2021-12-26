// import { DELETE_USER, EDIT_USER, SUBMIT_USER, GET_KEYWORD } from "./../actions-type"
import * as ActionType from "./../actions-type"

const actDeleteUser = (user) => {
    return {
        type: ActionType.DELETE_USER,
        payload: user
    }
}

const actEditUser = (user) => {
    return {
        type: ActionType.EDIT_USER,
        payload: user
    }
}

const actChangeTitle = (user) => {
    return {
        type: ActionType.EDIT_USER,
        payload: user
    }
}

const actOnSubmit = (user) => {
    return {
        type: ActionType.SUBMIT_USER,
        payload: user,
    }
}

const actGetKeyword = (keyword) => {
    return {
        type: ActionType.GET_KEYWORD,
        payload: keyword
    }
}

export {
    actDeleteUser,
    actEditUser,
    actChangeTitle,
    actOnSubmit,
    actGetKeyword,
}