import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchCountry();
  }, []);

  const fetchCountry = async () => {
    const urlData = await fetch("https://restcountries.eu/rest/v2/all");

    const items = await urlData.json();
    setCountry(items);
  };

  return (
    <div>
      <h1 className="heading">All Countries</h1>

      <div className="allCard">
        {country.map((c) => {
          return (
            <div className="countryCard">
              <NavLink to={`/country/${c.name}`} className="navlink">
                {c.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
