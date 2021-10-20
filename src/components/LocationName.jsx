import React from 'react'
import location from '../icons/round_place_white_24dp.png'


const LocationName = ({
    fullData,
    isLoading,
    city
}) => {
    return (
        <div className="location">
            {isLoading 
            ? city 
            : fullData.city.name + " , " + fullData.city.country}
            <img alt="" src={location} />
        </div>
    )
}
export default LocationName;