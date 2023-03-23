import React from 'react'
import { BrowserRouter as Router, 
    Routes, 
    Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
        <Router>
            <Routes>
                <Route exact path="/" element={<WelcomePage />}></Route>
                <Route path="/main" element={<MainPage />}></Route>      
                <Route path="/city/:countryCode/:city" element={<CityPage />}></Route> 
                <Route element={<NotFoundPage />}></Route>                                                           
            </Routes>
        </Router>
  )
}

export default App
