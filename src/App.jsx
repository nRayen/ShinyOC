
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home/index.jsx'
import { Survey } from './Pages/Survey/index.jsx'
import { Header } from './Components/Header/index.jsx'
import { Error } from './Components/Error/index.jsx'
import { Freelances } from './Pages/Freelances/index.jsx'
import { Results } from './Pages/Results/index.jsx'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #root {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        max-width: 1300px;
        min-height: 100vh;
        margin: 0 auto;
        padding: 0;
    }

    body {
        margin: 0;
    }

    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`


export function App() {
  return (
    <Router>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />}/>
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<Error />}/>
        </Routes>
    </Router>
  )
}