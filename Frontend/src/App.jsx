import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Dashboard } from './Components/Dashboard'
import { useState } from 'react'

function App() {

  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <div>
      <Navbar currentPage={currentPage}/>
      <Routes>
        <Route path='/' element={<Home setCurrentPage={setCurrentPage}/>}/>
        <Route path='/dashboard' element={<Dashboard setCurrentPage={setCurrentPage}/>} />
      </Routes>
    </div>
  )
}

export default App
