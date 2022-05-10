import React from 'react'

function ProfilePage() {
  return (
    <div className=" pt-24 mx-auto w-full items-center sm:px-12 px-4 flex">
      <div className="flex md:-mx-2 items-center w-full flex-col">
        {/* <!-- Top  --> */}
        <div className="w-full md:w-1/6 md:mx-2">
          {/* <!-- Profile Card --> */}
          <div className=" p-3 border-t-4 min-w-[100px] border-cyan-400">
            <div className="image rounded-full  overflow-hidden">
              <img
                className="md:h-auto h-1/2 w-1/2 md:w-full rounded-full mx-auto"
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                alt=""
              />
            </div>
            <h1 className="text-gray-200 text-center my-3 font-bold text-xl leading-8 ">
              Jane Doe
            </h1>
          </div>
          {/* <!-- End of profile card --> */}
          <div className="my-4"></div>
        </div>

        {/* <!-- Bottom  --> */}
        <div className="md:w-1/2 w-full px-10 sm:scale-125 mt-2 align-middle mx-2">
          {/*<!-- About Section --> */}
          <div className="bg-white p-1 sm:p-3 shadow-sm rounded-sm">
            <div className="flex flex-col items-center justify-center space-x-2 font-semibold text-gray-900 leading-8">
              <div className='flex'>
              <span className='mt-[6px] mx-1'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </span>

              <span className="tracking-wide">Bio</span>
              </div>
              <h1 className='text-sm font-normal text-justify  md:px-2 my-3 text-gray-900'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti eaque non ab eos, quos similique quidem veritatis voluptatem maiores voluptatum, ducimus accusantium architecto neque cupiditate. Repellat fuga hic eligendi.
              </h1>
            </div>
            <div className="flex mt-2 items-center justify-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid my-4 md:grid-cols-2 text-sm">
                <div className="grid  grid-cols-2">
                  <div className="py-1 font-semibold">First Name</div>
                  <div className="py-1">Jane</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="py-1 font-semibold">Last Name</div>
                  <div className="py-1">Doe</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="py-1 font-semibold">Gender</div>
                  <div className="py-1">Female</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="py-1 font-semibold">Contact No.</div>
                  <div className="py-1">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="py-1 font-semibold">Email.</div>
                  <div className="py-1">
                    <a className="text-blue-800" href="mailto:jane@example.com">
                      jane@example.com
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="py-1 font-semibold">Birthday</div>
                  <div className="py-1">Feb 06, 1998</div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End of about section --> */}

          {/* <!-- End of profile tab --> */}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
