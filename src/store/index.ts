import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postsReducer } from "./reducers/postReducer";

import {selectedCardReducer} from "./reducers/selectedCardReducer";

export type IRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    selectedCard: selectedCardReducer,
    posts: postsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));