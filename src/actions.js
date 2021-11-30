export const REQUEST_API_DATA='REQUEST_API_DATA'
export const RECEIVE_API_DATA='RECEIVE_API_DATA'

export const requestApiData=(params)=>({type: REQUEST_API_DATA, params});
export const receiveApiData=data=>({type: RECEIVE_API_DATA, data});