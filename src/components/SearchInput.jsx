import React, { useState } from 'react';

import location from '../icons/round_place_white_24dp.png'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';



const SearchInput =
    ({ handleChange, handleSubmit, city, fullData, isLoading, hendleSelect }) => {
        const [address, setAddress] = useState(null);
        const [cords, setCords] = useState({
            lat: null,
            lng: null
        });

        const hendleSelectTest = async value => {
            const results = await geocodeByAddress(value);
            const latlong = await getLatLng(results[0]);
            setAddress(value);
            //    setCords(latlong);
        }


        return (
            <>
                {/* <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={hendleSelectTest}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',

                                })}
                            />
                            <div>
                                {loading && <div>Loading...</div>}

                                {suggestions.map(suggestion => {
                                    const style = suggestion.active
                                        ? { backgroundColor: "pink", cursor: "pointer" }
                                        : { backgroundColor: "#fff", cursor: "pointer" };
                                    return (
                                        <div {...getSuggestionItemProps(suggestion, { style })}>
                                            {  suggestion.description}
                                        </div>
                                    )

                                })}



                            </div>
                        </div>
                    )}
                </PlacesAutocomplete> */}

                <form className="container--form"

                    onSubmit={handleSubmit}
                >
                    <input
                        className="search-box"
                        required
                        type="text"
                        onChange={handleChange}
                        value={city}
                        placeholder="Enter City"
                    />

                    <h2 className="location">
                        {isLoading ? city : fullData.city.name + " , " + fullData.city.country}
                        <img src={location} />
                    </h2>

                    {/* <button
                        type="submit"
                        value="city"
                        className="btn">
                        Check Weather
                    </button> */}
                </form>


            </>
        );

    }

export default SearchInput;

