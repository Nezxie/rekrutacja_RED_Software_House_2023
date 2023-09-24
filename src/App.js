import './App.css';
import React, { useState } from 'react';
import Weather from './Weather';
import QueryList from './QueryList';

function App() {
  const [queryList, setQueryList] = useState([]);
  //cashe handling
  return (
    <div className="App">
      <Weather queryList={queryList} setQueryList={setQueryList}></Weather>
      <div className="queryList">
        <QueryList queryList={queryList}></QueryList>
      </div>
    </div>
  );
}

export default App;