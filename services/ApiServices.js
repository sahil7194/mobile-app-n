
import axios from "axios";
import envirnoments from '../environments/environments';
import {retrieveData } from './LocalStorageService';

const apiUrl = envirnoments.apiUrl;

const authToken = retrieveData('authToken').
then((token) => {
     return token
    }).catch((err) =>{
    console.log('error in getting token', err)
});

const client = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${authToken}`
  }
});

export const get = (path,queryParams) =>{
    client.get(path, {params : queryParams})
      .then((response)=>{
        return response;
      }).catch((err)=>console.log(err))
}

export const post = (path, postData , queryParams) => {
    client.post(path, postData, { params : queryParams }).then((response) =>{
        return response;
    }).catch((error) =>{
        console.log(error);
    })
}

export const  put = (path, postData, queryParams) => {
    client.post(path, postData, { params : queryParams }).then((response) =>{
        return response;
    }).catch((error) =>{
        console.log(error);
    })
}

export const deleteM = (path, queryParams) => {
    client.post(path,{ params : queryParams }).then((response) =>{
        return response;
    }).catch((error) =>{
        console.log(error);
    })
}