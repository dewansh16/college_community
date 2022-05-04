
import Feed from './components/Feed'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Resources from './components/Resources'
import axios from 'axios';

function App() {
  
  const [backEndPosts, setBackEndPosts] = useState([]);
  useEffect(() => {
    axios.get("/post").then((res) => {
      console.log(res);
      setBackEndPosts(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  console.log(backEndPosts);

  return (
    <div className='bg-fixed'>
      <Navbar />
      <Feed/>
    </div>
  )
}

export default App
