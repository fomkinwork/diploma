import {Reducer} from "redux";

enum UserActions {
    SET_USER = "SET_USER",
}


export interface IUser {
    id: number | null,
    username: any
    email: string | null,
    photo: any
}

interface IInitialState {
    user: IUser | null,
    isAuth: boolean
}

const initialState: IInitialState = {
    user: null,
    isAuth: false
}

export const userReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActions.SET_USER:
            return { user: action.payload, isAuth: !!action.payload }

        default:
            return state
    }
}

export const setUserAction = (payload: any) => ({type: UserActions.SET_USER, payload});
// export const updateUserAction = (payload: IPost[]) => ({type: UserActions.UPDATE_USER, payload});