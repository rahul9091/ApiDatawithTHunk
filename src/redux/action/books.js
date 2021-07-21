import axios from 'axios'
import { ADD_TO_BOOKMARK_LIST, GET_BOOKS, REMOVE_FROM_BOOKMARK_LIST } from '../types'

import {BASE_URL} from '../../config/index'


export const getBooks = () => {
    return async dispatch => {
        const response = await axios.get(`${BASE_URL}`)
        if(response.data){
            dispatch({
                type:GET_BOOKS,
                payload:response.data
            })
        }else{
            console.log('undable to fetch data from api')
        }
    }
}

export const addBookmark = (book) => dispatch=> {
    dispatch({
        type:ADD_TO_BOOKMARK_LIST,
        payload:book
    })
}

export const removeBookmark = (book) => dispatch => {
    dispatch({
        type:REMOVE_FROM_BOOKMARK_LIST,
        payload:book
    })
}