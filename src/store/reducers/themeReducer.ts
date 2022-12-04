import {Reducer} from "redux";

enum ThemeActions {
    SET_THEME = "SET_THEME",
}

export enum ThemeVariant {
    light = "light",
    dark = "dark"
}

export interface IThemeState {
    theme: ThemeVariant
}

export const initialState: IThemeState = {
    theme: ThemeVariant.dark
}

export const themeReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ThemeActions.SET_THEME:
            return { theme: action.payload }

        default:
            return state
    }
}

export const setThemeAction = (payload: any) => ({type: ThemeActions.SET_THEME, payload});