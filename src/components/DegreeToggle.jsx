import React from 'react';

const DegreeToggle = ({ toggleUnits, degreeType }) => {
    return (
        <div 
        className="container--degreeToggle "
        >
            <div className="degreeToggle ">
                <input
                    
                    type="radio"
                    name="degree-type"
                    id="celsius"
                    value="celsius"
                    onChange={toggleUnits}
                    checked={degreeType === "celsius"}
                ></input> °C</div>
            <div className="degreeToggle">
                <input
                    
                    type="radio"
                    name="degree-type"
                    id="farenheit"
                    value="farenheit"
                    onChange={toggleUnits}
                    checked={degreeType === "fahrenheit"}
                ></input> °F
                </div>


        </div>
    );

}

export default DegreeToggle;