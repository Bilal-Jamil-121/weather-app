import React, { useState, useEffect ,useRef } from 'react';

const Weather = () => {
  const allIcons = {
    "01d": "/clear.png",
    "01n": "/clear.png",
    "02d": "/cloud.png",
    "02n": "/cloud.png",
    "03d": "/cloud.png",
    "03n": "/cloud.png",
    "04d": "/drizzle.png",
    "04n": "/drizzle.png",
    "09d": "/rain.png",
    "09n": "/rain.png",
    "10d": "/rain.png",
    "10n": "/rain.png",
    "13d": "/snow.png",
    "13n": "/snow.png",
  };

  const [weather, setWeather] = useState({});
const inputRef = useRef()
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();
      const iconCode = data.weather[0].icon;
      const icon = allIcons[iconCode] || "/clear.png";

      setWeather({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      });
inputRef.current.value=""
    } catch (error) {
      alert("City not found in records, Error fetching weather: ", error);
      inputRef.current.value=""
    }
  };

//   useEffect(() => {
//     alert("Welcome to weather app. Made by Bilal")
//   }, []);

  return (
    <div className=' z-1 bg-blue-900 p-5 h-1/3 py-5 place-self-center mt-18 rounded-2xl'>
        <div className='text-white text-3xl flex justify-center font-semibold'>Weather App</div>
      <div className='mt-5 flex items-center gap-5'>
        <input ref={inputRef} className='bg-amber-50 p-2 rounded w-[80%]' placeholder='Search' type="text" />
        <button onClick={()=>search(inputRef.current.value)} className='w-10 flex justify-center items-center cursor-pointer h-10 bg-white rounded-full'>
          <img className='h-5 hover:h-6' src="/search.svg" alt="search" />
        </button>
      </div>

      {weather.temperature && (
        <>
          <div className='flex mt-10 items-center justify-center gap-5'>
            <img  className='h-25' src={weather.icon} alt="Weather Icon" />
          </div>
          <p className='place-self-center mt-5 font-semibold text-white text-5xl'>
            {weather.temperature}°C
          </p>
          <p className='place-self-center mt-2 text-white text-2xl'>
            {weather.location}
          </p>
          <div className='mt-10 flex justify-between'>
            <div>
              <img className='h-15' src="/humidity.png" alt="Humidity" />
              <p className='text-white font-semibold'>{weather.humidity}%</p>
              <p className='text-white text-sm'>Humidity</p>
            </div>
            <div>
              <img className='h-15' src="/wind.png" alt="Wind" />
              <p className='text-white font-semibold'>{weather.windspeed} km/h</p>
              <p className='text-white text-sm'>Wind speed</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
