import React from 'react';
import arrow from '../icons/round_navigation_white_36dp.png'



const FirstDayHighlights = ({
    firstDay,
    isLoading
}) => {


    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <div key={firstDay.dt}
            className="container--items"
        >
            <div className="container--items__cards">
                <h1 >Today`s Highlights </h1>
                <div className="container--items__cardsBig">


                    <div className="card__big">
                        <div className="card__big--text">Wind Status
                            <h2 className="card__big--icon">{firstDay.wind.speed} <span>mph</span></h2>
                        </div>
                        <img alt="" src={arrow} style={{ transform: `rotate(${firstDay.wind.deg}deg)` }} />
                    </div>

                    <div className="card__big">
                        <div className="card__big--text">Humidity
                            <h2 className="card__big--icon">{firstDay.main.humidity} <span>%</span> </h2>

                        </div>
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
                        <div className="card__small--text"> Visibility </div>

                        <div className="card__small--icon">{firstDay.visibility / 1000} <span>km</span> </div>
                    </div>

                    <div className="card__small">
                        <div className="card__small--text" >Air Pressure </div>
                        <div className="card__small--icon">{firstDay.main.pressure / 100} <span>mb</span></div>
                    </div>

                </div>
            </div>


        </div>

    )

}


export default FirstDayHighlights;