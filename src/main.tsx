import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AlgsDB } from './algs';
import AlgsPage from './components/pages/AlgsPage/AlgsPage';
import Home from './components/pages/Home/Home';
import VideoPage from './components/pages/VideoPage/VideoPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oll" element={<AlgsPage title="OLL" algs={AlgsDB.oll} />} />
        <Route path="/pll" element={<AlgsPage title="PLL" algs={AlgsDB.pll} />} />
        <Route path="/video/:id" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
