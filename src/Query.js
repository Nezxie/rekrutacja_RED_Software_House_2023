function Query({location, date, temperature, numberOfSearches }) {  
    return (
    <div className="singleQuery">
      <p>{location}</p>
      <p>{date}</p>
      <p>{temperature} °C</p>
      <p className="searchCounter">searched {numberOfSearches} time{numberOfSearches===1?"":"s"}</p>
    </div>
  );
}

export default Query;