import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home.jsx'
import ErrorPage from '../src/pages/Error/Error.jsx'

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </Router>
    </main>
  )
}

export default App
