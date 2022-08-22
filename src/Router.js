import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentsWrapper from './components/Layout/ContentsWrapper';
import BanPickSimulator from './pages/BanPickSimulator';

const Router = () => {
  return (
    <BrowserRouter>
      <ContentsWrapper>
        <Routes>
          <Route path="/" element={<BanPickSimulator />} />
          <Route path="/:id" element={<BanPickSimulator />} />
        </Routes>
      </ContentsWrapper>
    </BrowserRouter>
  );
};

export default Router;
