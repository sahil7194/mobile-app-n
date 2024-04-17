
import axios from "axios";
import envirnoments from '../environments/environments';
import {retrieveData } from './LocalStorageService';

// TODO: need to update logic
export const apiUrl = envirnoments.apiUrl;
// export const apiUrl = 'http://192.168.1.64/api/';

export const authToken = retrieveData('auth_token').
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

export const get = (path, queryParams) => {
    return new Promise((resolve, reject) => {
        client.get(path, { params: queryParams })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const post = (path, postData, queryParams) => {
    return new Promise((resolve, reject) => {
        client.post(path, postData, { params: queryParams })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const put = (path, postData, queryParams) => {
    return new Promise((resolve, reject) => {
        client.put(path, postData, { params: queryParams })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const deleteM = (path, queryParams) => {
    return new Promise((resolve, reject) => {
        client.delete(path, { params: queryParams })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
