import { useState } from "react";
import axios from "axios";
// import envirnoments from '../environments/environments'

//  const  apiUrl = envirnoments.apiUrls;

export const apiUrl = 'http://192.168.1.64/api/';


export const client = axios.create({
  baseURL: apiUrl,
  headers: {
    'Accept': 'application/json',
  }
});


export const isAuthenticated = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return { isLoggedIn, setIsLoggedIn };
}

export const login = (formData) => {
  return new Promise((resolve, reject) => {
    client.post('login', formData)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const logout = () => {
  setIsAuthenticated(true);
  console.warn('user want to logout');
}

export const signUp = (formData) => {
  console.log("User wants to create an account: ", formData);
}

export const resetPassword = (formData) => {
  console.log("User requested a password reset for this email address: ", formData);
}

export const updatePassword = (formData) => {
  console.log('update user password with  :', formData);
}