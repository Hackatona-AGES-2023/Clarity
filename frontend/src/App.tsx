import { Box } from '@chakra-ui/react';
import './App.css';
import ClearTextPage from './pages/ClearTextPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HowToUsePage from './pages/HowToUsePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<ClearTextPage />} />
        <Route path={'/how-to-use'} element={<HowToUsePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
