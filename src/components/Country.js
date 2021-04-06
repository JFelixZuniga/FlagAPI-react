import React from "react";
import styled from "styled-components";

const CountryStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .details {
    padding: 2.4rem 2.4rem 4rem;
  }
  h2 {
    margin: 0;
  }
  p {
    margin-bottom: 0.8rem;
    line-height: 0.8;
    font-weight: 300;
    span {
      font-weight: 600;
    }
  }
`;

function Country({ flag, name, population, region, capital }) {
  return (
    <CountryStyled>
      <img loading="lazy" src={flag} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <span>Population: </span>
          {population}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
