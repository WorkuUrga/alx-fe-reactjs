
import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Footer from './components/Footer'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <Header />
      <UserProfile />
      <MainContent />
      <Footer />
      <Counter />

    </>
  )
}

export default App
