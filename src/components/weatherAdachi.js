import React, { useEffect, useState } from 'react';


function WeatherAdachi() {
  const [currentTemperature, setCurrentTemperature, CurrentWeatherCode, setCurrentWeatherCode] = useState(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.76&longitude=139.81&hourly=temperature_2m,weathercode&current_weather=true&forecast_days=1')
      .then(response => response.json())
      .then(data => {
        const temperature = data.current_weather.temperature;
        setCurrentTemperature(temperature);
    
      })
        
        
      
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    
        <li className='home'>足立: {currentTemperature}°C {CurrentWeatherCode}</li>
     
  );
}

export default WeatherAdachi;