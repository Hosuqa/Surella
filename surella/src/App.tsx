import { BrowserRouter } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Hero/>
        <About/>
      </div>
    </BrowserRouter>
  )
}

export default App
