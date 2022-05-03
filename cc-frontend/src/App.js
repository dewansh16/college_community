
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Resources from './components/Resources'
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
  }, [])

  
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
    <div>
      <Navbar />
      <div className="flex pt-24 bg-fixed md:px-[12%] justify-between">
        <div className="flex flex-col ">
          <Post
            body={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt in asperiores earum, illo porro dolor odit quae quia aliquid id  vitae, inventore saepe nulla, quibusdam cumque vitae, inventore saepe nulla, quibusdam cumque vitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevvvitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumque dicta tempore quod?'
            }
          />
          {posts?.map(({ body }) => (
            <Post body={body} />
          ))}
        </div>
    
        <div className='hidden lg:block'>
        <Resources />
        </div>
      </div>
    </div>
  )
}

export default App
