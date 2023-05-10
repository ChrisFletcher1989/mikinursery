import React, { useEffect, useState } from 'react';


function WeatherLondon() {
  const [currentTemperatureLnd, setCurrentTemperatureLnd] = useState(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m,weathercode&current_weather=true&forecast_days=1')
      .then(response => response.json())
      .then(data => {
        const temperatureLnd = data.current_weather.temperature;
        setCurrentTemperatureLnd(temperatureLnd);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    
        <li className='home'>ロンドン: {currentTemperatureLnd}°C</li>
     
  );
}

export default WeatherLondon;