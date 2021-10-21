import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import {celsius,fahrenheit} from '../utils/degrees'
const REACT_APP_IMG = process.env.REACT_APP_IMG;


const FirstDay = ({
    firstDay,
    degreeType,
    isLoading,
}) => {
    return isLoading ? (
        <h1>Loading!!!</h1>
    ) : (
        <div
            className="container--items"
        >
            <div className="container--items__cardMainWrap">
                <div className="container--items__cardMainContent">

                    <img alt="" src={`${REACT_APP_IMG}${firstDay.weather[0].icon}@2x.png`} />
                    <div className="firstDay-degree"> {degreeType === "celsius" ? celsius(Math.round(firstDay.main.temp))
                        + "°C" : fahrenheit(Math.round(firstDay.main.temp)) + "°F"}</div>
                    <div className="firstDay-wDescription">{firstDay.weather[0].description}</div>
                    <div className="container--items__cardDateToday">
                        <Moment format=" [ Today ] • " unix>{firstDay.dt}</Moment>
                    </div>
                    <div className="container--items__cardDate">
                        <Moment format="  ddd,  Do  MMM " unix>{firstDay.dt}</Moment>
                    </div>

                </div>
            </div>
        </div>
    )

}


export default FirstDay;