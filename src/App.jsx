import Header from './components/Header.jsx'
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import { AnimatePresence } from 'framer-motion'


function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer/>
    </>
  )
}

export default App
