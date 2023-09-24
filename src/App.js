import './App.css';
import Weather from './Weather';
import QueryList from './QueryList';
import React, { useState, useEffect } from 'react';

function App() {
  const [queryList, setQueryList] = useState([]);
  const [queryCount, setQueryCount] = useState(
    () => {
      const savedState = localStorage.getItem("searchHistory");
      const count = JSON.parse(savedState);
      return count || {};
    }
  );

  function updateQuerylist(newEntry){
    setQueryList([...queryList, { id:crypto.randomUUID() ,location: newEntry.location, date: newEntry.date, temperature: newEntry.temperature}]);
  }

  function updateQueryCount(queryName){
    let queryCountCopy = queryCount;
    if(queryName in queryCount){
      queryCountCopy[queryName]+=1;
    }
    else{
      queryCountCopy[queryName]=1;
    }
    setQueryCount(queryCountCopy);
  }

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(queryCount));
  });
  
  return (
    <div className="App">
      <Weather updateQueryCount={updateQueryCount} updateQuerylist={updateQuerylist}></Weather>
      <div className="queryList">
        <QueryList queryList={queryList} queryCount={queryCount}></QueryList>
      </div>
    </div>
  );
}

export default App;