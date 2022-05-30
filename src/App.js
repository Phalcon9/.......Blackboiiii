
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import AddBlog from './components/AddBlog';
import Login from './components/Login';




const App = () => {
  
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/AddBlog' element={<AddBlog/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
