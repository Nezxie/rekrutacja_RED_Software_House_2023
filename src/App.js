import './App.css';
import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import QueryList from './QueryList';

function App() {
  const [queryList, setQueryList] = useState([]);
  const [nameCount, setNameCount] = useState(
    () => {
      const savedState = localStorage.getItem("searchHistory");
      const count = JSON.parse(savedState);
      return count || {};
    }
  );

  function updateQuerylist(newEntry){
    setQueryList([...queryList, { id:crypto.randomUUID() ,location: newEntry.location, date: newEntry.date, temperature: newEntry.temperature, numberOfSearches:newEntry.numberOfSearches}]);
  }
  function updateNameCount(queryName){
    let nameCountCopy = nameCount;
    if(queryName in nameCount){
      nameCountCopy[queryName]+=1;
    }
    else{
      nameCountCopy[queryName]=1;
    }
    setNameCount(nameCountCopy);
  }
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(nameCount));
  });
  
  return (
    <div className="App">
      <Weather updateNameCount={updateNameCount} updateQuerylist={updateQuerylist}></Weather>
      <div className="queryList">
        <QueryList queryList={queryList} nameCount={nameCount}></QueryList>
      </div>
    </div>
  );
}

export default App;