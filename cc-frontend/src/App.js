
import Feed from './components/Feed'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom";
import PostPage from './components/PostPage'
import Post from './components/Post'
import Resources from './components/Resources'
import axios from 'axios';
import ProfilePage from './components/ProfilePage';
import Comments from './components/Comments';

function App() {
  

  return (
    <div className=''>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/:postid/comments" element={<Comments />} />
      </Routes>
    </div>
  )
}

export default App
