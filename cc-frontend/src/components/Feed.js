import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from './Post'
import Resources from './Resources'

function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("/post").then((res) => {
      console.log(res);
      setPosts(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  console.log(posts);
  return (
    <div className="flex md:w-4/5 px-12 mx-auto justify-center md:justify-between pt-24">
      <div className="flex flex-col ">
        {posts?.map(({ description }) => (
          <Post body={description} />
        ))}
      </div>

      <div className='w-full hidden lg:flex lg:justify-end'>
      <div
        className="fixed"
      >
        <Resources />
      </div>
      </div>
    </div>
  )
}

export default Feed
