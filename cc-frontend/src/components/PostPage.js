import axios from 'axios'
import React, { useState } from 'react'

function PostPage() {
  const [message, setMessage] = useState('')

  const handleClick = () => {
    if (message === '') return
    axios({
      method: 'POST',
      url: '/post',
      data: {
        title: `blah blah blahhh`,
        author: `blah blah blahhh`,
        description: message,
      },
    })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div class="sm:w-1/3 px-12 flex flex-col sm:min-w-[400px] w-full">
        <label class="text-white text-xl ">Message</label>
        <textarea
          name="message"
          class="
      w-full
      h-32 my-3
      px-4
      py-3
      text-xl
      
      border-2 border-gray-300
      rounded-sm
      outline-none
      focus:border-blue-400
    "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
        ></textarea>
        <button onClick={handleClick} className="btn-cyan">
          Post
        </button>
      </div>
    </div>
  )
}

export default PostPage
