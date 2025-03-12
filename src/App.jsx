import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { useState, useEffect } from 'react';


const App = () => {
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  console.log('State:', weather);

  useEffect(() => {
    // Define a fetch function:
    const fetchDefaultData = async () => {
     const data = await weatherService.show('Klamath Falls');
     const newWeatherState = {
       location: data.location.name,
       temperature: data.current.temp_f,
       condition: data.current.condition.text,
     };
     setWeather(newWeatherState);
   };
   fetchDefaultData();
  }, []);
  
  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
};

export default App;
