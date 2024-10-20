import axios from 'axios';

const API_URL = 'http://localhost:5000/api/weather/summary';

export const getWeatherSummary = async (city = '') => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        city,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather summary', error);
    return [];
  }
};
