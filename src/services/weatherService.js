// src/services/weatherService.js

const API_KEY = "f9a5047365ae46ba85151005251203";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
// src/services/weatherService.js

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { show };
