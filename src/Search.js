import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import "./styles/sass/_search.scss";
import { usePosition } from "use-position";

const Search = ({ changeLocation }) => {
  const [location, setLocation] = useState("Seattle");

  const { latitude, longitude, timestamp, accuracy, error } = usePosition(
    true,
    { enableHighAccuracy: true }
  );

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        changeLocation(location);
      }}
    >
      <label htmlFor="location">
        City
        <input
          id="location"
          value={location}
          placeholder="Location"
          onChange={e => setLocation(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Search;
