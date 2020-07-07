import { FETCH_BOOK, ADD_BOOK,REMOVE_BOOK, VIEW_BOOK, SUBMIT_BOOK } from "../actions/Types";

const initState = {
    books: [],
    bookCollections: [],
    bookLink:""
};
export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_BOOK:
            return {
                ...state,
                books: action.payload
            };
        case ADD_BOOK:
            return {
                ...state,
                bookCollections: [...state.bookCollections,...action.payload]

            }
        case REMOVE_BOOK:
            return {
                ...state,
                bookCollections:action.payload
            };
        case VIEW_BOOK:
            return {
                ...state,
                bookLink:action.payload
            };
        case SUBMIT_BOOK:
            return {
                ...state,
                books:action.payload
            };
            

        default:
            return state;
    }
}