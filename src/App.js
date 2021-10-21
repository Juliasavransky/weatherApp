import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import DaysCard from './components/DaysCard';
import DegreeToggle from './components/DegreeToggle';
import SearchInput from './components/SearchInput';
import FirstDay from './components/FirstDay';
import FirstDayHighlights from './components/FirstDayHighlights';
import axios from './utils/axios';
import LocationName from './components/LocationName';
const API_KEY_WEATHER = process.env.REACT_APP_WEATHER_API;
const BASE_URL = process.env.REACT_APP_BASE_URL;


const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [fullData, setFullData] = useState([]);
  const [fourDaysData, setFourDaysData] = useState([]);
  const [firstDayData, setFirstDayData] = useState([]);

  const [units, setUnits] = useState("celsius");
  const [city, setCity] = useState("");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);


  const handleChange = (e) => {
    setCity(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity("")
  }

  const handleSelect = async (city) => {
    setCity(city)
  }

  useEffect(() => {
    const onGeoLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);

        });
      } else {
        alert("🙁🙁🙁Sorry!!! Your Browser Doesn't Support Geolocation🙁🙁🙁");
      }

      const request = await axios
        .get(`${BASE_URL}forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY_WEATHER}`);
      setFullData(request.data);
      setFourDaysData(request.data.list.slice(8, 40).filter(item => item.dt_txt.includes("12:00:00")));
      setFirstDayData(request.data.list[1]);
      setIsLoading(false);

      return request;
    }
    onGeoLocation();
  }, [lat, lon]);


  useEffect(() => {
    const onSearchCity = async () => {
      const request = await axios
        .get(`${BASE_URL}forecast?q=${city}&units=imperial&appid=${API_KEY_WEATHER}`);
      setFullData(request.data);
      setFourDaysData(request.data.list.slice(8, 40).filter(item => item.dt_txt.includes("12:00:00")));
      setFirstDayData(request.data.list[4]);
      setIsLoading(false)

      return request;
    }
    onSearchCity();
  }, [city])


  function toggleUnits(e) {
    setUnits(e.target.value)
  }

  return (
    <Fragment>
      <div className="container--input">
        <SearchInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleSelect={handleSelect}
          isLoading={isLoading}
          fullData={fullData}
          city={city}
        />
      </div>

      <div className="container--details">
        <DegreeToggle
          toggleUnits={toggleUnits}
          degreeType={units}
        />

        <LocationName
          fullData={fullData}
          isLoading={isLoading}
          city={city}
        />
      </div>


      <div className="container--cards">
        <FirstDay
          isLoading={isLoading}
          firstDay={firstDayData}
          degreeType={units}
        />
        <div className="row">
          <DaysCard
            isLoading={isLoading}
            reading={fourDaysData}
            degreeType={units}
          />
          <FirstDayHighlights
            isLoading={isLoading}
            firstDay={firstDayData}
          />
        </div>
      </div>
    </Fragment>
  );
}




export default App;
