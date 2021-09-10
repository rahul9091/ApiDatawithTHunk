import axios from 'axios'
import { BULK_IMAGES, GET_IMAGES} from '../types'

import {BASE_URL,BASE_URL_20} from '../../config/index'


export const getBooks = () => {
    return async dispatch => {
        const response = await axios.get(`${BASE_URL}`);
        console.log(response,'response')
        if(response.data){
            dispatch({
                type:GET_IMAGES,
                payload:response.data
            })
        }else{
            console.log('undable to fetch data from api')
        }
    }
}


export const bulkImages = () => {
    return async dispatch => {
        const response = await axios.get(`${BASE_URL_20}`);
        console.log(response,'response in base 20')
        if(response.data){
            dispatch({
                type:BULK_IMAGES,
                payload:response.data
            })
        }else{
            console.log('undable to fetch data from api')
        }
    }
}


