import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./Country";

const CountryListStyled = styled.div`
  display: grid;
  justify-content: center;
  grid-row-gap: 3.5rem;
  background-color: var(--bg-gray);
  padding: 6rem 2rem;
`;

function CountryList() {
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch(() => console.log("Hubo un error"));
  }, []);

  return (
    <CountryListStyled>
      <Country
        flag="https://tepualtravelchile.cl/wp-content/uploads/2018/08/bandera-chile.png"
        name="Chile"
        population={221133}
        region="America"
        capital="Santiago"
      />
    </CountryListStyled>
  );
}

export default CountryList;
