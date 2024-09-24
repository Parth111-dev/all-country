import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import './CountryDetail.css'
import { useTheme } from "../Hooks/useTheme";
import CountriesListShimmer from "./CountryDetailShimmer";


export const CountriesDetails = () => {
  const params = useParams()
  const { state } = useLocation()
  const { isDarkModeOn } = useTheme()
  const countryName = params.country
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function updateCountriesData(data) {

    setCountryData({
      image: data.flags.svg,
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      topLevelDomain: data.tld,
      currencies: Object.values(data.currencies).map((currencies) => currencies.name).join(', '),
      language: Object.values(data.languages).join(', '),
      borders: []
    })

    if (!data.borders) {
      data.borders = []
    }
    Promise.all(data.borders.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => borderCountry.name.common)
    })).then((borders) => {
      setTimeout(() => setCountryData((prevState) => ({ ...prevState, borders })))
    })
  }

  useEffect(() => {
    if (state) {
      updateCountriesData(state)
      return
    }
    setIsLoading(true)
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountriesData(data)
      }).catch(err => console.error(err))
        .finally(() => setIsLoading(false))
  }, [countryName]);


  return (
    <main className={`${isDarkModeOn ? 'dark' : ''}`}>
      {isLoading ? (
        <CountriesListShimmer />
      ) : (
        <div className="country-details-container">
          <span className="back-button" onClick={() => history.back()}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          {countryData && (
            <div className="country-details">
              <img src={countryData.image} alt="" />
              <div className="details-text-container">
                <h1>{countryData.name}</h1>
                <div className="details-text">
                  <p>
                    <b>Native Name: {countryData.nativeName}</b>
                    <span className="native-name"></span>
                  </p>
                  <p>
                    <b>Population: {countryData.population}</b>
                    <span className="population"></span>
                  </p>
                  <p>
                    <b>Region: {countryData.region}</b>
                    <span className="region"></span>
                  </p>
                  <p>
                    <b>Sub Region: {countryData.subRegion}</b>
                    <span className="sub-region"></span>
                  </p>
                  <p>
                    <b>Capital: {countryData.capital}</b>
                    <span className="capital"></span>
                  </p>
                  <p>
                    <b>Top Level Domain: {countryData.topLevelDomain}</b>
                    <span className="top-level-domain"></span>
                  </p>
                  <p>
                    <b>Currencies: {countryData.currencies}</b>
                    <span className="currencies"></span>
                  </p>
                  <p>
                    <b>Languages: {countryData.language}</b>
                    <span className="languages"></span>
                  </p>
                </div>
                {countryData.borders.length !== 0 && (
                  <div className="border-countries" >
                    <b>Border Countries:</b>&nbsp;
                    {
                      countryData.borders.map((border) => <Link to={`/${border}`} key={border} >{border}</Link>)
                    }
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  )
}
