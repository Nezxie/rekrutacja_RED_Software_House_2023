import React, { useState, useRef } from 'react';
import Error from './Error';


function Weather({updateNameCount, updateQuerylist}) {
    const [error, setError] = useState({
      isError: false,
      errorMessage: ""
    });
    const locationNameRef = useRef();
    const API_KEY = '4f2f9814c28b4036ad500721230204';

    function callErrorPopup(error){
      setError({
        isError: true,
        errorMessage: error.message
      })
    }

    async function fetchCurrentWeather(location){
        try{
            let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`, {mode: 'cors'});
            let data = await response.json();
  
            if(data.error){
              callErrorPopup(data.error)
              return;
            }
            let queryData = {
                location:data.location['name'],
                date:data.current['last_updated'],
                temperature:data.current['temp_c'],
            }
            if(queryData.location.localeCompare(location, 'en', { sensitivity: 'base' })){
              let error = {
                message: `Location not found. Did you mean ${queryData.location}?`
              }
              callErrorPopup(error);
              return;
            }
            updateQuerylist(queryData);
            updateNameCount(queryData.location);
            setError({
              isError: false,
              errorMessage: ""
            })
            locationNameRef.current.value = null;

        }catch(err){
          let error = { message: "There has been a connection issue"}
          callErrorPopup(error)
        }
    }

    function handleNewQuery(e) {
        const location = locationNameRef.current.value;
        if (location === '') return;
        fetchCurrentWeather(location);
      }

    return (
      <div className="weatherForm">
        <div className='formControl'>
          <label htmlFor="locationInput">Location:</label>
          <input id="locationInput" ref={locationNameRef} type="text" placeholder="London..."></input>
          <button onClick={handleNewQuery}>Check current weather</button>
          </div>
        {error.isError ? <Error message={error.errorMessage}></Error> : ""}
      </div>
    );
  }
  
  export default Weather;