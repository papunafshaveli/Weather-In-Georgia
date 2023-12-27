import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { FcOvertime } from "react-icons/fc";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { FaTemperatureHigh } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { GiWindsock } from "react-icons/gi";
import { GiWindTurbine } from "react-icons/gi";

type WeatherTypes = {
  location: {
    country: string;
    name: string;
    localtime: string;
  };
  current: {
    condition: {
      icon: string;
      text: string;
    };

    temp_c: string;
    feelslike_c: string;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
  };
};

const City = () => {
  const [weatherData, setWeatherData] = useState<WeatherTypes | null>(null);
  const params = useParams();
  const [cityName, setCityName] = useState(params.city);

  const getWeatherData = async () => {
    const response = await axios.get<WeatherTypes | null>(
      `http://api.weatherapi.com/v1/current.json?key=84bcfbec12c84530921161006231912&q=${cityName}`
    );
    setWeatherData(response.data);
    console.log(weatherData);
  };

  useEffect(() => {
    getWeatherData();
    setCityName(params.city);
  }, [params.city, cityName]);

  return (
    <CityContainer>
      <div>
        <p>
          <FcOvertime />
          Local Time: {weatherData?.location.localtime}
        </p>
        <p>
          <LiaTemperatureHighSolid />
          Temp: {weatherData?.current.temp_c}
        </p>
        <p>
          <FaTemperatureHigh /> Feelslike: {weatherData?.current.feelslike_c}
        </p>

        <p>
          <FaWind />
          Wind Degree: {weatherData?.current.wind_degree}
        </p>
        <p>
          <GiWindsock />
          Wind Dir: {weatherData?.current.wind_dir}
        </p>
        <p>
          {" "}
          <GiWindTurbine />
          Wind Kmh: {weatherData?.current.wind_kph}
        </p>
      </div>
      <img src={weatherData?.current.condition.icon} alt="" />
    </CityContainer>
  );
};

export default City;

const CityContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 2rem;

  p {
    font-size: 1rem;
  }

  img {
    width: 12rem;
  }
`;
