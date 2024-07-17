import axios from 'axios';
const URL = 'https://flipkart-server-0l7s.onrender.com';
export const authenticateSignup = async (data) => {
  try {

    return await axios.post(`${URL}/signup`, data); // every api call is an asynchronous request so we have to either use .then() or async-await.

  } catch (error) {
    console.log('Error While Calling Signup API', error.message)
    // console.log('API')
  }
}

export const authenticateLogin = async (data) => {
  try {

    return await axios.post(`${URL}/login`, data); // every api call is an asynchronous request so we have to either use .then() or async-await.

  } catch (error) {
    console.log('Error While Calling Login API', error.message)
    // console.log('API')
    // console.log(error.response.status)
    return error.response; // if we throw an error using '401 status code' from the backend then it will not enter the 'try block', instead it will directly enter the catch block, and since it will enter not the 'try block' we will not get status code 401, so to get it we return 'error.response' from catch block which contains status code '401'
  }
}