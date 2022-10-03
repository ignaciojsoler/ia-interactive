import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import NavigationMenu from './components/NavigationMenu'
import Footer from './components/Footer'

function App() {

  const [displayNavigationMenu, setDisplayNavigationMenu] = useState(false)

  return (
    <>
      <Header setDisplayNavigationMenu={setDisplayNavigationMenu}/>
      <NavigationMenu 
      displayNavigationMenu={displayNavigationMenu}
      setDisplayNavigationMenu={setDisplayNavigationMenu}
      />
      <Home />
      <Footer/>
    </>
  )
}

export default App
