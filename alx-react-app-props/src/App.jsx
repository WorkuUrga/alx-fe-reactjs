import React from 'react';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import UserProfile from './components/UserProfile.jsx'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
    <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserContext.Provider value={userData}>
      <ProfilePage />
      </UserContext.Provider>
    </>
  );
}

export default App;
