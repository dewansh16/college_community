
import Feed from './components/Feed'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Resources from './components/Resources'
import axios from 'axios';

function App() {
  

  return (
    <div className=''>
      <Navbar />
      <Feed/>
    </div>
  )
}

export default App
