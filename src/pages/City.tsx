import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

  const getWeatherData = async () => {
    const response = await axios.get<WeatherTypes | null>(
      `http://api.weatherapi.com/v1/current.json?key=84bcfbec12c84530921161006231912&q=${params.city}`
    );
    setWeatherData(response.data);
    console.log(weatherData);
  };

  useEffect(() => {
    getWeatherData();
  }, [params.city]);

  return (
    <CityContainer>
      <p>Country: {weatherData?.location.country}</p>
      <p>City: {weatherData?.location.name}</p>
      <p>Local Time: {weatherData?.location.localtime}</p>
      <p>Temp: {weatherData?.current.temp_c}</p>
      <p>Feelslike: {weatherData?.current.feelslike_c}</p>
      <p>Condition: {weatherData?.current.condition.text}</p>
      <img src={weatherData?.current.condition.icon} alt="" />
      <p>Wind Degree: {weatherData?.current.wind_degree}</p>
      <p>Wind Dir: {weatherData?.current.wind_dir}</p>
      <p>Wind Kmh: {weatherData?.current.wind_kph}</p>
    </CityContainer>
  );
};

export default City;

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
