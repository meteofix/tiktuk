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
        }).catch(function (error){
            console.log(error);
        })
    return responseData;
};

export default requestData;