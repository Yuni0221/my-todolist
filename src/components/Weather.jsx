import React, { useState, useEffect } from "react";
import API_KEY from "../../apikey";

export default function Weather() {
  const [coords, saveCoords] = useState();
  const [name, setName] = useState();
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();

  const getWeather = (lat, lon) => {
    console.log(lat, lon);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const temp = data.main.temp;
        const weathers = data.weather[data.weather.length - 1];
        const name = data.name;
        setTemp(temp);
        setWeather(weathers.main);
        setName(name);
      });
  };

  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude; // 경도
    const longitude = position.coords.longitude; // 위도
    const coordsObj = {
      latitude,
      longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  };

  const error = (err) => {
    console.log("geo err! " + err);
  };

  const requestCoords = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  useEffect(() => {
    requestCoords();
  }, []);

  return (
    <>
      <div>
        <div className="ml-4 text-sm">@ {name}</div>
        <div className="ml-4 text-sm">
          {temp}° {weather}
        </div>
      </div>
    </>
  );
}
