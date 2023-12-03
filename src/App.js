import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageMain from './pages/PageMain';
import PageCat from './pages/PageCat';
import PageDog from './pages/PageDog';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="cat" element={<PageCat />} />
        <Route path="dog" element={<PageDog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
