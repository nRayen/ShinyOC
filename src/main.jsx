import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home/index.jsx'
import { Survey } from './Pages/Survey.jsx'
import { Header } from './Components/Header/index.jsx'
import { ClientForm } from './Components/ClientForm.jsx'
import { FreelanceForm } from './Components/FreelanceForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<Survey />}>
                    <Route path='client' element={<ClientForm/>}/>
                    <Route path='freelance' element={<FreelanceForm/>}/>
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
)
