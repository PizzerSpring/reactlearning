import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Postitem from "./components/Postitem";
import styles from "./styles/App.css";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ]);
  
  return (
    <div className="App">
      {posts.map(post => 
        <Postitem post={post}/> 
)}
    </div>
  );
}

export default App;
