import axios from "axios";
import envirnoments from '../environments/environments';
import { retrieveData } from './LocalStorageService';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const apiUrl = envirnoments.apiUrl;

const client = axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  
  client.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("auth_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
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
