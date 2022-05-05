import React from 'react'

function ProfilePage() {
  return (
    <div class=" pt-24 mx-auto w-full items-center sm:px-12 px-4 flex">
    <div class="flex md:-mx-2 items-center w-full flex-col">
        {/* <!-- Left Side --> */}
        <div class="w-full md:w-1/6 md:mx-2">
            {/* <!-- Profile Card --> */}
            <div class=" p-3 border-t-4 border-cyan-400">
                <div class="image rounded-full overflow-hidden">
                    <img class="h-auto w-full mx-auto"
                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                        alt=""/>
                </div>
                <h1 class="text-gray-200 text-center my-3 font-bold text-xl leading-8 ">Jane Doe</h1>
                
            </div>
            {/* <!-- End of profile card --> */}
            <div class="my-4"></div>
        </div>





        {/* <!-- Bottom Side --> */}
        <div class="md:w-1/2 w-full sm:scale-125 mt-2 align-middle mx-2">
            {/* <!-- Profile tab -->
            <!-- About Section --> */}
            <div class="bg-white p-1 sm:p-3 shadow-sm rounded-sm">
                <div class="flex items-center justify-center space-x-2 font-semibold text-gray-900 leading-8">
                    <span clas="text-green-500">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700">
                    <div class="grid md:grid-cols-2 text-sm">
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">First Name</div>
                            <div class="px-4 py-2">Jane</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Last Name</div>
                            <div class="px-4 py-2">Doe</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Gender</div>
                            <div class="px-4 py-2">Female</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Contact No.</div>
                            <div class="px-4 py-2">+11 998001001</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Current Address</div>
                            <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Permanant Address</div>
                            <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Email.</div>
                            <div class="px-4 py-2">
                                <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Birthday</div>
                            <div class="px-4 py-2">Feb 06, 1998</div>
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