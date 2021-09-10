import {GET_IMAGES,BULK_IMAGES} from '../types';

const initialState = {
    images:[],
    bulkImage:[]
}

export default function booksReducer(state=initialState,action){
    switch(action.type){
        case GET_IMAGES:
            console.log(action.payload,'action.payload')
            return {
                ...state,
                images:action.payload
            }
        case BULK_IMAGES:
            console.log(action.payload,'bulk mages in reducer')
            return {
                ...state,
                bulkImage:action.payload
            }
        default:
            return {
                ...state
            }
            
    }
}