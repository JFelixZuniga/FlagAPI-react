import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Country from "./Country";

const CountryListStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.5rem;
  max-width: 1440px;
  background-color: var(--bg-gray);
  margin: 0 auto;
  padding: 6rem 2rem;
`;

function CountryList() {
  const dispatch = useDispatch();
  // useSelector recibe por parámetro una función, que a su vez recibe todo el estado de la aplicación (ese estado global)
  const countryList = useSelector((state) => state.countryList);
  console.log("El estado total es:", countryList);

  // const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((list) => {
        // Esta acción es enviada al reducer (ubicado en APP)
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        console.log(list.length);
      })

      .catch(() => console.log("Hubo un error"));
  }, []);

  return (
    <CountryListStyled>
      {countryList.map(({ flag, name, population, region, capital }) => {
        return (
          <Country
            flag={flag}
            name={name}
            key={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
