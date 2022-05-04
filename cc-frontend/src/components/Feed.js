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
    <div className="flex md:w-4/5 px-12 mx-auto justify-between pt-24">
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

      <div
        className="fixed lg:block hidden"
      >
        <Resources />
      </div>
    </div>
  )
}

export default Feed
