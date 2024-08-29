import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />}/>

        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element= {<Profile />}/>
        </Route>
        <Route path="/blog/:id" element = {<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
