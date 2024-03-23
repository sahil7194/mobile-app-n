import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data stored successfully!');
    } catch (error) {
      console.log('Error storing data:', error);
    }
  };

  export const retrieveData = (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then((value) => {
          if (value !== null) {
            resolve(value);
          } 
        })
        .catch((error) => {
          console.log('Error retrieving data:', error);
          reject(error);
        });
    });
  };

 export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Data removed successfully!');
    } catch (error) {
      console.log('Error removing data:', error);
    }
  };
  