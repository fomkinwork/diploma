import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import {postsReducer} from "./reducers/postReducer";
import {selectedCardReducer} from "./reducers/selectedCardReducer";
import {themeReducer} from "./reducers/themeReducer";

export type IRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    user: userReducer,
    selectedCard: selectedCardReducer,
    posts: postsReducer,
    theme: themeReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
