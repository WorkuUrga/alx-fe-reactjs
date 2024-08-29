import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path='/' element= {<Profile />}/>
        </Route>
        <Route path="/blog/:id" element = {<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
