import Search from './components/Search'
import './App.css'
import './index.css'

function App() {
  return (
    <div className='bg-gray-200 h-full pt-8 pb-4'>
      <h1 className='font-bold text-lg mb-4'>Github User Search</h1>
      <Search />
    </div>
  )
}

export default App
