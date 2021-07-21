import {GET_BOOKS,ADD_TO_BOOKMARK_LIST,REMOVE_FROM_BOOKMARK_LIST} from '../types';

const initialState = {
    books:[],
    bookMarks:[]
}

export default function booksReducer(state=initialState,action){
    switch(action.type){
        case GET_BOOKS:
            return {
                ...state,
                books:action.payload
            }
        case ADD_TO_BOOKMARK_LIST:
            console.log(action.payload,'payload in reducer')
            return {
                ...state,
                bookMarks: [...state.bookMarks,action.payload]
            }
        case REMOVE_FROM_BOOKMARK_LIST:
            const dataFilterd = state.bookMarks.filter((item)=> item.id !== action.payload.id)
            return {
                ...state,
                bookMarks:[...dataFilterd]
            }
        default:
            return {
                ...state
            }
            
    }
}