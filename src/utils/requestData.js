import React, {useEffect} from 'react';
import axios from "axios";
import {X_RAPIDAPI_HOST, X_RAPIDAPI_KEY} from "./consts";

const requestData = ({url='', name = '' , responseData='', setResponseData, setIsLoading=()=>false}) => {
        axios.get(url + name, {
            headers: {
                'x-rapidapi-host': X_RAPIDAPI_HOST,
                'x-rapidapi-key': X_RAPIDAPI_KEY
            }
        }).then(function (response) {
            setResponseData(response.data);
            setIsLoading(false);
        }).catch(function (err){
            if (err.response) {
                console.log('Client received an error response (5xx, 4xx)')
            } else if (err.request) {
                console.log('Client never received a response, or request never left ')
            } else {
                console.log('Something wrong')
            }
        })
    return responseData;
};

export default requestData;