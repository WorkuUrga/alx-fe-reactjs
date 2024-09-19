import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserSearch from './components/UserSearch'
import './App.css'

function App() {
  return (
    <div className=''>
      <h1>Github User Search</h1>
      <UserSearch />
    </div>
  )
}

export default App
