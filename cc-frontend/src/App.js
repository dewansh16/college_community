import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar'
import Post from './components/Post'
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios.get("/post").then((res) => {
      console.log(res);
      setPosts(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  console.log(posts);

  return (
    <div className='bg-teal-50'>
      <Navbar />
      <div className="pt-24 flex flex-col items-center">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default App
