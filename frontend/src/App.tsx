import { Box } from '@chakra-ui/react';
import './App.css';
import ClearTextPage from './pages/ClearTextPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HowToUsePage from './pages/HowToUsePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HowToUsePage />} />
        <Route path={'translate'} element={<ClearTextPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
