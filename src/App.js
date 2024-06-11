import React from 'react';
import Header from './components/section/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';

import Home from './pages/Home';
import Atteck from './pages/Atteck';
import Barun from './pages/Barun';
import Cheogaji from './pages/Cheogaji';
import Chkicken from './pages/Chkicken';
import Dangchidd from './pages/Dangchidd';
import Dongki from './pages/Dongki';
import Gamach from './pages/Gamach';
import Hoolala from './pages/Hoolala';
import Kkanbu from './pages/Kkanbu';
import Kyedong from './pages/Kyedong';
import Kkubeurak from './pages/Kkubeurak';
import Mexicana from './pages/Mexicana';
import Puradak from './pages/Puradak';
import Ttobongee from './pages/Ttobongee';
import Footer from './components/section/Footer';
import Search from './components/section/Search';

const App = () => {

  return (
    <ThemeProvider>
      <DataProvider>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider >
  );
};

const MainApp = () => {
  const { theme } = useTheme(); // useTheme 훅을 이곳에서 사용

  return (
    <div className={`body ${theme}`}>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atteck" element={<Atteck />} />
        <Route path="/barun" element={<Barun />} />
        <Route path="/cheogaji" element={<Cheogaji />} />
        <Route path="/chkicken" element={<Chkicken />} />
        <Route path="/dangchidd" element={<Dangchidd />} />
        <Route path="/dongki" element={<Dongki />} />
        <Route path="/gamach" element={<Gamach />} />
        <Route path="/hoolala" element={<Hoolala />} />
        <Route path="/kkanbu" element={<Kkanbu />} />
        <Route path="/kkubeurak" element={<Kkubeurak />} />
        <Route path="/kyedong" element={<Kyedong />} />
        <Route path="/mexicana" element={<Mexicana />} />
        <Route path="/puradak" element={<Puradak />} />
        <Route path="/ttobongee" element={<Ttobongee />} />
      </Routes>
      <Footer />
    </div>
  );
};


export default App;
