import './App.css';
import React, { useState } from 'react';
import Weather from './Weather';
import QueryList from './QueryList';

function App() {
  //state
  const [queryList, setQueryList] = useState([]);
  //cashe handling
  //add to history
  return (
    <div className="App">
    <Weather queryList={queryList} setQueryList={setQueryList}></Weather>
    <QueryList queryList={queryList}></QueryList>
    </div>
  );
}

export default App;