import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from './Post'
import Resources from './Resources'

function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios
      .get('/post')
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(posts)
  return (
    <div className="flex md:w-4/5 px-12 mx-auto justify-center gap-12 md:justify-between pt-24">
      {/* post */}
      <div className="flex w-full md:w-2/3 flex-col ">
        {posts?.map(({ description }) => (
          <Post body={description} />
        ))}
      </div>
      {/* reso */}
      {/* <div className="w-full bg-orange-500 relative hidden lg:flex lg:justify-end"> */}
      <div className="w-1/3 hidden md:flex justify-end">
        <div className='mr-72'>
          <Resources />
        </div>
      </div>
    </div>
  )
}

export default Feed
