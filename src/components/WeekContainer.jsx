import React, { useState, useEffect } from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';
import SearchInput from './SearchInput';
import FirstDay from './FirstDay';
import axios from '../utils/axios';
import FirstDayHightlights from './FirstDayHightlights';
// require('dotenv').config()
// const API_KEY_WEATHER = process.env.REACT_AAP_WEATER_API;
const API_KEY_WEATHER = "07dd5bdd7ce5d137f005e9455ce2e753"

function WeekContainer() {
    const [isLoading, setIsLoading] = useState(true)
    const [fullData, setFullData] = useState([]);
    const [fourDaysData, setFourDaysData] = useState([]);
    const [firstDayData, setFirstDayData] = useState([]);
    const [units, setUnits] = useState("celsius");
    const [city, setCity] = useState(null);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setCity("")
    }

    const hendleSelect = async (city) => {
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

            const request = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY_WEATHER}`);
            setFullData(request.data);
            setFourDaysData(request.data.list.slice(8, 40).filter(item => item.dt_txt.includes("12:00:00")));
            setFirstDayData(request.data.list[1]);
            setIsLoading(false);

            // setResults(request.data.city.name);

            return request;
        }
        onGeoLocation();
    }, [lat, lon]);


    useEffect(() => {
        const onSearchCity = async () => {
            const request = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY_WEATHER}`);
            setFullData(request.data);
            setFourDaysData(request.data.list.slice(8, 40).filter(item => item.dt_txt.includes("12:00:00")));
            setFirstDayData(request.data.list[4]);
            setIsLoading(false)
            // setResults((request.data.city.name).slice());
            // console.log(results);

            return request;

        }
        onSearchCity();
    }, [city])
    console.log(fullData);


    function toggleUnits(e) {
        setUnits(e.target.value)
    }


    return (
        <>


            <div className="container">
                <DegreeToggle
                    toggleUnits={toggleUnits}
                    degreeType={units}
                />

                <SearchInput
                    isLoading={isLoading}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    fullData={fullData}
                    city={city}
                    hendleSelect={hendleSelect}
                />
            </div>





            <div className="container">
                <FirstDay
                    isLoading={isLoading}
                    firstDay={firstDayData}
                    degreeType={units}
                    
                />
                <div className="row">
                    <DayCard
                        isLoading={isLoading}
                        reading={fourDaysData}
                        degreeType={units}
                    />
                    <FirstDayHightlights
                        isLoading={isLoading}
                        firstDay={firstDayData}
                    />
                </div>

            </div>


        </>
    );
}

export default WeekContainer;





