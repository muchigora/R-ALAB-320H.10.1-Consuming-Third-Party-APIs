import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/starships/';

export default async function getData () {
  try {
    const response = await axios.get(BASE_URL);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Something went wrong', error);
    throw error;
  }
}