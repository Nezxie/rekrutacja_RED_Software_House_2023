import React, { useState, useRef } from 'react';

function Weather() {

    const [queryList, updateQueryList] = useState([])
    const locationNameRef = useRef();
    const API_KEY = '4f2f9814c28b4036ad500721230204';

    async function fetchCurrentWeather(location){
        try{
            let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=yes`, {mode: 'cors'});
            let data = await response.json();
            return {
                location:data.location['name'],
                date:data.current['last_updated'],
                temperature:data.current['temp_c']
            }
        }catch(err){
        console.log(err);
        }
    }

    function handleNewQuery(e) {
        const location = locationNameRef.current.value;
        if (location === '') return
        const response = fetchCurrentWeather(location)
        updateQueryList(oldList => {
          return [...oldList, { location: response.location, date: response.date, temperature: response.temperature}]
        })
        locationNameRef.current.value = null
      }

    return (
      <div className="weatherForm">
        <label htmlFor="locationInput">Location:</label>
        <input id="locationInput" ref={locationNameRef} type="text" placeholder="London..."></input>
        <button onClick={handleNewQuery}>Check current weather</button>
      </div>
    );
  }
  
  export default Weather;