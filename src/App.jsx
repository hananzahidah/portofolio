import './App.css'
import AboutMe from './components/about'
import ContactMe from './components/contact'
import HomePage from './components/home'
import Navbar from './components/navbar'
import Portofolio from './components/portofolio'
import Skill from './components/skill'
import Load from './components/load.jsx'

function App() {
  return (
    <>
      <Load/>
      <Navbar/>
      <HomePage/>
      <AboutMe/>
      <Portofolio/>
      <ContactMe/>
    </>
  )
}

export default App
