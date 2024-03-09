import { useState } from "react";

export const isAuthenticated = () => {

        const  [isLoggedIn, setIsLoggedIn] = useState(true);

        return {isLoggedIn, setIsLoggedIn};
}

 export const login = (formData) => {
    console.warn('user want to log with ', formData);
}

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

export const useMyState = () => {
    const [value, setValue] = useState('this my state');
  
    // Expose setter and getter functions
    const setValueAndUpdate = (newValue) => {
      setValue(newValue);
    };
  
    return {
      value,
      setValueAndUpdate,
    };
  };