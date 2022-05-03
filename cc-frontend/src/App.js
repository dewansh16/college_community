import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Post from './components/Post'

function App() {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => setPosts(data));
  
  }, [])
  
  return (
    <div className='bg-teal-50'>
      <Navbar />
      <div
      className="pt-24 flex flex-col items-center bg-fixed">
        <Post body={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt in asperiores earum, illo porro dolor odit quae quia aliquid id  vitae, inventore saepe nulla, quibusdam cumque vitae, inventore saepe nulla, quibusdam cumque vitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevvvitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumquevitae, inventore saepe nulla, quibusdam cumque dicta tempore quod?'}/>
        {posts?.map(({body})=>(
          <Post body={body}/>

        ))}
        
      </div>
    </div>
  )
}

export default App
