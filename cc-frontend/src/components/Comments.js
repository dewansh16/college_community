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
        <div className="px-4 py-2 bg-gray-100 w-full border rounded-lg">
          <div className='px-4 py-2'>
          Comments
          </div>
            <div className="w-full mb-3 rounded ">
              <div className="flex ml-3">
                <div className="mr-3">
                  <img
                    src="http://picsum.photos/50"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className='flex items-center'>
                  <h1 className="mb-1 font-semibold">Itay Buyoy</h1>
                </div>
              </div>

              <div className="mt-3 p-3 w-full">
                <textarea
                  rows="3"
                  className="border p-2 rounded w-full"
                  placeholder="Write something..."
                ></textarea>
              </div>

              <div className="flex justify-between mx-3">
                <div>
                  <button className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className=' h-[1px] bg-gray-400'/>
            <div className='w-full mt-6 pt-2 px-4 py-2 rounded'>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio velit vero doloremque soluta dolor sed totam cum culpa neque nesciunt odio, voluptatum provident repudiandae nobis maxime possimus aliquam atque cupiditate.
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Comments
