import { BrowserRouter } from 'react-router-dom'
import Hero from './components/hero'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Hero/>
      </div>
    </BrowserRouter>
  )
}

export default App
