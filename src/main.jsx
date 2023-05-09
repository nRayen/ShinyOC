import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home/index.jsx'
import { Survey } from './Pages/Survey/index.jsx'
import { Header } from './Components/Header/index.jsx'
import { Error } from './Components/Error/index.jsx'
import { Freelances } from './Pages/Freelances/index.jsx'
import { Results } from './Pages/Results/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey/:questionNumber" element={<Survey />}/>
                <Route path="/freelances" element={<Freelances />} />
                <Route path="/results" element={<Results />} />
                <Route path="*" element={<Error />}/>
            </Routes>
        </Router>
    </React.StrictMode>
)
