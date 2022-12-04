import {Reducer} from "redux";

import {IPostCard} from "../../components/common/PostList/PostCard/PostCard";

enum SelectedCardActions {
    SELECT_CARD = "SELECT_CARD",
    CLOSE_CARD = "CLOSE_CARD",
    SET_CARDS = "SET_CARDS",
    UPDATE_CARD = "UPDATE_CARD",
}

export interface InitialStateType {
    selectedCard: IPostCard | null
    cards: IPostCard[]
}

const initialState: InitialStateType = {
    selectedCard: null,
    cards: []
};

export const selectedCardReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SelectedCardActions.SELECT_CARD:
            if (action.payload) {
                return {...state, selectedCard: action.payload};
            } else {
                return {...state, selectedCard: initialState.selectedCard};
            }

        case SelectedCardActions.CLOSE_CARD:
            return {...state, selectedCard: initialState.selectedCard};

        case SelectedCardActions.SET_CARDS:
            return {...state, cards: action.payload};

        case SelectedCardActions.UPDATE_CARD:
            const arr = state.cards;
            const oldCard = arr.find((card: IPostCard) => card.kinopoiskId === action.payload.kinopoiskId);
            const cardIndex = arr.indexOf(oldCard);
            arr.splice(cardIndex, 1, action.payload);
            return {...state, cards: arr};

        default:
            return state;
    }
}

export const selectCardAction = (payload: any) => ({type: SelectedCardActions.SELECT_CARD, payload});
export const closeCardAction = () => ({type: SelectedCardActions.CLOSE_CARD});
export const setCardsAction = (payload: IPostCard[]) => ({type: SelectedCardActions.SET_CARDS, payload});
export const updateCardAction = (payload: IPostCard) => ({type: SelectedCardActions.UPDATE_CARD, payload});