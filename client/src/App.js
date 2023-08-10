import React from 'react';
import './App.css';
import './utilities.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Feed from './pages/Feed';
import Search from './pages/Search';
import Create from './pages/Create';
import Logout from './pages/Logout';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<AppLayout />}>
                  <Route index element={<Feed />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/post' element={<Create />} />
                  <Route path='/logout' element={<Logout />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
