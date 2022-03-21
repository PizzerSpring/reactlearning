import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Postitem from "./components/Postitem";
import './styles/App.css';

function App() {
  
  return (
    <div className="App">
       <Postitem post={{id: 1, title: 'Javascript', body: 'Description'}}/>
       <Postitem post={{id: 2, title: 'Javascript', body: 'Description'}}/>
       <Postitem post={{id: 3, title: 'Javascript', body: 'Description'}}/>
    </div>
  );
}

export default App;
