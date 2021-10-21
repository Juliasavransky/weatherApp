import React from 'react';


const SearchInput =
    ({
        handleChange,
        handleSubmit,
        city,
    }) => {

        return (
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
            </form>
        );

    }

export default SearchInput;

