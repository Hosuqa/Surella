import ContentBox from '@components/global/ContentBox';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={ <div className='relative z-0'><ContentBox/></div> } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;