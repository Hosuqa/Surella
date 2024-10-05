import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Navbar/>
        <Hero/>
        <About/>
      </div>
    </BrowserRouter>
  )
}


export default App
