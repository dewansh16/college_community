import React from 'react'
import Post from './Post'

function Comments() {
  return (
    <div className="md:w-1/2 mx-auto pt-44 flex flex-col items-center">
      <Post
        body={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur facere numquam corporis ratione rerum? Doloribus alias ipsam vel quos deserunt, modi, repudiandae neque, consectetur quia nesciunt recusandae natus provident quas?'
        }
      />
      <div className="w-full p-4">
        <div className="bg-gray-100 w-full border rounded-lg">
          <div className='px-4 py-2'>
          Comments
          </div>
          {/* <div class="flex h-screen bg-gray-800 justify-center items-center"> */}
            <div class="w-full  p-2 pt-2 rounded ">
              <div class="flex ml-3">
                <div class="mr-3">
                  <img
                    src="http://picsum.photos/50"
                    alt=""
                    class="rounded-full"
                  />
                </div>
                <div className='flex items-center'>
                  <h1 class="mb-1 font-semibold">Itay Buyoy</h1>
                </div>
              </div>

              <div class="mt-3 p-3 w-full">
                <textarea
                  rows="3"
                  class="border p-2 rounded w-full"
                  placeholder="Write something..."
                ></textarea>
              </div>

              <div class="flex justify-between mx-3">
                <div>
                  <button class="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Comments
