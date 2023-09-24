import './App.css';
import React, { useState } from 'react';
import Weather from './Weather';
import QueryList from './QueryList';

function App() {
  const [queryList, setQueryList] = useState([]);
  const [nameCount, setNameCount] = useState({});

  //cashe handling
  return (
    <div className="App">
      <Weather queryList={queryList} setQueryList={setQueryList} nameCount={nameCount} setNameCount={setNameCount}></Weather>
      <div className="queryList">
        <QueryList queryList={queryList} nameCount={nameCount}></QueryList>
      </div>
    </div>
  );
}

export default App;