import React, { useEffect, useState } from 'react';
import Header from './components/section/Header';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import Home from './pages/Home';
import Bbqchicken from './pages/Bbqchicken';
import Bhcchicken from './pages/Bhcchicken';
import Hosigichicken from './pages/Hosigichicken';
import Gcova from './pages/Gcova';
import Kfc from './pages/Kfc';
import Kyochonchicken from './pages/Kyochonchicken';
import Nenechicken from './pages/Nenechicken';
import Norangtongdak from './pages/Norangtongdak';
import Pelicana from './pages/Pelicana';
import Chicken60 from './pages/Chicken60';
import Goobne from './pages/Goobne';
import Footer from './components/section/Footer';
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
import Mexicana from './pages/Mexicana';
import Puradak from './pages/Puradak';
import Ttobongee from './pages/Ttobongee';
import Search from './components/section/Search';
import Loading from './components/section/Loading';

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
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { theme } = useTheme(); // useTheme 훅을 이곳에서 사용

  useEffect(() => {
    // Home 경로가 아닐 때만 로딩 상태를 활성화
    if (location.pathname !== '/') {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  if (loading && location.pathname !== '/') {
    return <Loading />;
  }

  return (
    <div className={`body ${theme}`}>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bbqchicken" element={<Bbqchicken />} />
        <Route path="/bhcchicken" element={<Bhcchicken />} />
        <Route path="/hosigichicken" element={<Hosigichicken />} />
        <Route path="/gcova" element={<Gcova />} />
        <Route path="/kfc" element={<Kfc />} />
        <Route path="/kyochonchicken" element={<Kyochonchicken />} />
        <Route path="/nenechicken" element={<Nenechicken />} />
        <Route path="/norangtongdak" element={<Norangtongdak />} />
        <Route path="/pelicana" element={<Pelicana />} />
        <Route path="/chicken60" element={<Chicken60 />} />
        <Route path="/Goobne" element={<Goobne />} />
        <Route path="/atteck" element={<Atteck />} />
        <Route path="/barun" element={<Barun />} />
        <Route path="/cheogaji" element={<Cheogaji />} />
        <Route path="/chkicken" element={<Chkicken />} />
        <Route path="/dangchidd" element={<Dangchidd />} />
        <Route path="/dongki" element={<Dongki />} />
        <Route path="/gamach" element={<Gamach />} />
        <Route path="/hoolala" element={<Hoolala />} />
        <Route path="/kkanbu" element={<Kkanbu />} />
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