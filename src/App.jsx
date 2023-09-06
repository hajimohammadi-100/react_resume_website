import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { themeContext } from './context/themeContext';
import { HelmetProvider } from 'react-helmet-async';
import { lightTheme, darkTheme } from './layouts/theme';
import { showBox } from './constants/showBox';
import style from "./assets/styles/style.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Home,
  About,
  Contact,
  Project,
  Projects,
  Services,
  Skills,
  NotFound
} from "./pages"
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuStatus, setMenuStatus] = useState("defult");
  const [accordion, setAccordion] = useState(false);
  const [language, setLanguage] = useState("Pe");
  const location = useLocation();
  const theme = isDarkMode ? lightTheme : darkTheme;
  const matches = useMediaQuery('(max-width:830px)');

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    window.addEventListener("scroll", () => { showBox(boxes) });
    showBox(boxes);
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location])

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    window.addEventListener("scroll", () => { showBox(boxes) });
    showBox(boxes);
  }, [isDarkMode, language, location , matches])

  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <themeContext.Provider value={{
          isDarkMode,
          setIsDarkMode,
          language,
          setLanguage,
          activeMenu,
          setActiveMenu,
          matches,
          setAccordion,
          accordion,
          setMenuStatus,
          menuStatus
        }}>
          <Header />
          <Box component={'main'} className={style.pageDimensions}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects/project/:Id' element={<Project />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/services' element={<Services />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </Box>
          <Footer />
        </themeContext.Provider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
