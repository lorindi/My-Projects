import style from "./Weather.module.css";
import img from "./pngwing.com.png";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const Weather = () => {
  const { cityName } = useParams();

  const apiKey = "bc443a09a58f6de988bde7acc823c3ac";
  const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

  const [city, setCity] = useState(cityName);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherAndForecast = async () => {
    try {
      const response = await fetch(`${weatherUrl}${city}&appid=${apiKey}`);
      const data = await response.json();
      // console.log(data)

      if (Object.keys(data).length <= 2) {
        toast.error("City not found!", {
          style: {
            background: "#152534", 
          },
        });
        setCity("");
        return;
      }

      const weatherInfo = {
        city: city,
        temperature: (data.main.temp - 273.15).toFixed(2),
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        wind: data.wind.speed,
        clouds: data.clouds.all,
        coordinates: {
          lat: data.coord.lat,
          lon: data.coord.lon,
        },
      };

      setWeatherData(weatherInfo);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && city.trim() === "") {
      toast.error("Enter city name!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    fetchWeatherAndForecast();
  };

  return (
    <div className={style.containerWeather}>
      <form onSubmit={handleSubmit} className={style.formWeather}>
        <input
          type="text"
          placeholder="City..."
          value={city}
          disabled={cityName}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Find Location</button>
      </form>

      {weatherData && (
        <div className={style.weatherInfo}>
          <div className={style.mapContainer}>
            <iframe
              className={style.contentIframe}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                weatherData.coordinates.lon - 1
              },${weatherData.coordinates.lat - 1},${
                weatherData.coordinates.lon + 1
              },${weatherData.coordinates.lat + 1}&layer=mapnik`}
            ></iframe>
            <div className={style.marker}></div>
          </div>

          <div className={style.contentDataWeather}>
            <h2>{weatherData.city}</h2>
            <p>
              Temperature: <span>{weatherData.temperature}</span> °C
            </p>
            <p>
              Description: <span>{weatherData.description}</span>
            </p>
            <p>
              Wind Speed: <span>{weatherData.wind}</span> m/s
            </p>
            <p>
              Cloudiness: <span>{weatherData.clouds}</span> %{" "}
            </p>
          </div>
        </div>
      )}
      {!weatherData && (
      <div className={style.containerImageDefault}>
        <img className={style.imageDefault} src={img} alt="no-img" />
      </div>
      )}
    </div>
  );
};
