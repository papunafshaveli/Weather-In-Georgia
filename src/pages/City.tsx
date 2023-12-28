import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FcOvertime } from "react-icons/fc";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { FaTemperatureHigh } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { GiWindsock } from "react-icons/gi";
import { GiWindTurbine } from "react-icons/gi";
import { CityContainer, CityNameContainer, Wrapper } from "./styles";
import { HiLightBulb } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";

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

type CityPropTypes = {
  themes: boolean;
  setThemes: Dispatch<SetStateAction<boolean>>;
};

const City: React.FC<CityPropTypes> = ({ themes, setThemes }) => {
  const [weatherData, setWeatherData] = useState<WeatherTypes | null>(null);
  const params = useParams();
  const [cityName, setCityName] = useState(params.city);

  const getWeatherData = async () => {
    const response = await axios.get<WeatherTypes | null>(
      `http://api.weatherapi.com/v1/current.json?key=84bcfbec12c84530921161006231912&q=${cityName}`
    );
    setWeatherData(response.data);
  };

  useEffect(() => {
    getWeatherData();
    setCityName(params.city);
  }, [params.city, cityName]);

  const handleClick = () => {
    setThemes(!themes);
  };

  return (
    <>
      <CityNameContainer themes={themes}>
        <p>{weatherData?.location.name}</p>
        {themes ? (
          <MdDarkMode size={32} onClick={handleClick} />
        ) : (
          <HiLightBulb size={32} onClick={handleClick} />
        )}
      </CityNameContainer>
      <CityContainer>
        <div>
          <Wrapper themes={themes}>
            <FcOvertime />
            <p>{weatherData?.location.localtime}</p>
          </Wrapper>
          <Wrapper themes={themes}>
            <LiaTemperatureHighSolid />
            <p> Temp: {weatherData?.current.temp_c} °C</p>
          </Wrapper>
          <Wrapper themes={themes}>
            <FaTemperatureHigh />{" "}
            <p> Feelslike: {weatherData?.current.feelslike_c} °C</p>
          </Wrapper>

          <Wrapper themes={themes}>
            <FaWind />
            <p>Wind Degree: {weatherData?.current.wind_degree}</p>
          </Wrapper>
          <Wrapper themes={themes}>
            <GiWindsock />
            <p> Wind Dir: {weatherData?.current.wind_dir}</p>
          </Wrapper>
          <Wrapper themes={themes}>
            <GiWindTurbine />
            <p> Wind Kmh: {weatherData?.current.wind_kph}</p>
          </Wrapper>
        </div>
        <img src={weatherData?.current.condition.icon} alt="Weather image" />
      </CityContainer>
    </>
  );
};

export default City;
