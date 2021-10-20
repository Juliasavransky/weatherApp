import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
const REACT_APP_IMG = process.env.REACT_APP_IMG;



const DaysCard = ({
    reading: items,
    degreeType,
    isLoading
}) => {


    const fahrenheit = (num) => {
        let fahrenheit = Math.round(num)
        return fahrenheit;
    }

    const celsius = (num) => {
        let celsius = Math.round((num - 32) * (5 / 9))
        return celsius;
    }

    return isLoading ?
        (<h1>Loading...</h1>
        ) : (
            <div
                className="container--items"
            >
                <div
                    className="container--items__daysCard"
                >
                    {
                        items.map(item =>
                        (
                            <div className="row daysCard" key={item.dt}>
                                <div className="daysCard__Date"><Moment format="ddd , Do MMM " unix>{item.dt}</Moment></div>

                                <img alt="" src={`${REACT_APP_IMG}${item.weather[0].icon}@2x.png`} />
                                <div className="col temps">
                                    <h3 className="temp-max"> {degreeType === "celsius" ? celsius(Math.round(item.main.feels_like))
                                        + "°C" : fahrenheit(Math.round(item.main.feels_like)) + "°F"}
                                    </h3>
                                    <h3 className="temp-min">{degreeType === "celsius" ? celsius(Math.round(item.main.temp_min))
                                        + "°C" : fahrenheit(Math.round(item.main.temp_min)) + "°F"}
                                    </h3>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        )

}

export default DaysCard;

