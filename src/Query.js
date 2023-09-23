function Query({location, date, temperature}) {  
    return (
    <div>
      <p>{location}</p>
      <p>{date}</p>
      <p>{temperature} °C</p>
    </div>
  );
}

export default Query;