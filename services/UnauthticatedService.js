import { useState } from "react";
import axios from "axios";
import envirnoments from '../environments/environments';


//  const  apiUrl = envirnoments.apiUrls;

// export const apiUrl = 'http://192.168.207.134/api/';
export const apiUrl = envirnoments.apiUrl;



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
  return new Promise((resolve, reject) => {
    console.log(formData);
    client.post('signup', formData)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export const resetPassword = (formData) => {
  console.log("User requested a password reset for this email address: ", formData);
}

export const updatePassword = (formData) => {
  console.log('update user password with  :', formData);
}