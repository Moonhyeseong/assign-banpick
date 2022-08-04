import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BanPick from './pages/BanPick';
import ContentsWrapper from './pages/ContentsWrapper';

const Router = () => {
  return (
    <BrowserRouter>
      <ContentsWrapper>
        <Routes>
          <Route path="" element={<BanPick />} />
        </Routes>
      </ContentsWrapper>
    </BrowserRouter>
  );
};

export default Router;
