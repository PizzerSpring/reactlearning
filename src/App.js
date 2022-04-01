import React, { useRef, useState } from "react";
import Postitem from "./components/Postitem";
import "./styles/App.css";


function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Python', body: 'Description'},
    {id: 2, title: 'Python', body: 'Description'},
    {id: 3, title: 'Python', body: 'Description'}
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
