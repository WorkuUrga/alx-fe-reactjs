
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />}  />
        <Route path="/About" element ={<About />} />
        <Route path="/Services" element={<Services />}  />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
