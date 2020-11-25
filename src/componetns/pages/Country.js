import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../assets/css/bootstrap.min.css";

const Country = ({ match }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const countryDataUrl = await fetch(
      `https://restcountries.eu/rest/v2/name/${match.params.name}`
    );

    const item = await countryDataUrl.json();
    setCountry(item[0]);
  };

  console.log(country);

  return (
    <div className="cardComponent">
      <Card className="m-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={country.flag} />
        <Card.Body>
          <Card.Title>{country.name}</Card.Title>
          <Card.Text>Capital: {country.capital}</Card.Text>
          <Card.Text>Region: {country.region}</Card.Text>
          <Card.Text>Population: {country.population}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Country;
