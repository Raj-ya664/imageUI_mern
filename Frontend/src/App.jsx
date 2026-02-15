import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import CraetePost from './pages/CraetePost.jsx'
import Feed from './pages/Feed.jsx'
function App() {
  return (
   <Router>
    <Routes>
      
      <Route path='/create-post' element={<CraetePost/>} />
      <Route path='/feed' element={<Feed/>} />
    </Routes>
   </Router>
  )
}

export default App
