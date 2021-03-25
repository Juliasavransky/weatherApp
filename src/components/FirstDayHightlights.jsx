import React from 'react';
import arrow from '../icons/round_navigation_white_36dp.png'



const FirstDayHightlights = ({ firstDay, isLoading }) => {


    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <div key={firstDay.dt}
            className="container--items"
        >
            <div className="container--items__cards">
                <h1 >Today`s Hightlights</h1>
                <div className="container--items__cardsBig">


                    <div className="card__big">
                        <h3>Wind Status
                             <h2>{firstDay.wind.speed} <span>mph</span></h2>
                        </h3>
                        <img src={arrow} style={{ transform: `rotate(${firstDay.wind.deg}deg)` }} />
                    </div>

                    <div className="card__big">
                        <h3>Humidity
                            <h2>{firstDay.main.humidity} <span>%</span> </h2>

                        </h3>
                        <div className="humidity-bar__num">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className="humidity-bar">
                            <div className="humidity-bar-active" style={{ width: `${firstDay.main.humidity}%` }} ></div>
                        </div>


                    </div>
                </div>

                <div className="container--items__cardsSmall">
                    <div className="card__small" >
                        <h3 > Visibility </h3>

                        <h2>{firstDay.visibility / 1000} <span>km</span> </h2>
                    </div>

                    <div className="card__small">
                        <h3 >Air Pressure </h3>
                        <h2>{firstDay.main.pressure / 100} <span>mb</span></h2>
                    </div>

                </div>
            </div>


        </div>

    )

}


export default FirstDayHightlights;