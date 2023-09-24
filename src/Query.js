function Query({location, date, temperature}) {  
    return (
    <div className="singleQuery">
      <p>{location}</p>
      <p>{date}</p>
      <p>{temperature} °C</p>
      <p className="searchCounter">searched {1} times</p>
    </div>
  );
}

export default Query;