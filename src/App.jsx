import './styles/App.css'
import NavBar from "./components/navbar.jsx"
import InfoSection from './components/info-section.jsx'
import Testimonials from './components/testimonials.jsx'
import Locations from './components/location-section.jsx'

function App() {
  return (
    <>
      <NavBar />
      <InfoSection />
      <Locations />
      <Testimonials />
    </>
  )
}

export default App
