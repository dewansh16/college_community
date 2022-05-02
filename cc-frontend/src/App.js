import Navbar from './components/Navbar'
import Post from './components/Post'

function App() {
  return (
    <div className='bg-teal-50'>
      <Navbar />
      <div className="pt-24 flex flex-col items-center">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default App
