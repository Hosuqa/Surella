import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

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
