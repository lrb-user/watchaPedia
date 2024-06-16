import './App.css'
import { BrowserView, MobileView} from 'react-device-detect';
import MobileLoginPage from './components/Pages/Mobile/MobileLoginPage';
import MobileLoginLayout from './components/Layout/MobileLoginLayout';
import MobileLayout from './components/Layout/MobileLayout';
import MobileMain from './components/Pages/Mobile/MobileMain';
import MobileMovieContentPage from './components/Pages/Mobile/MobileMovieContentPage';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Pages/LoginPage';
import Main from './components/Pages/Main';
import MovieContentPage from './components/Pages/MovieContentPage';
import LoginLayout from './components/Layout/LoginLayout';

function App() {

  return (

      <>
      <HashRouter>
        <BrowserView>
          <Routes>
            <Route element={<LoginLayout />}>
              <Route path="/" element={<LoginPage />} />
            </Route>
            <Route element={<Layout />}>
              <Route path="/main" element={<Main />} />
              <Route path="/movieContentPage" element={<MovieContentPage />} />
            </Route>
          </Routes>
        </BrowserView>
      
        <MobileView>
          <Routes>
            <Route element={<MobileLoginLayout />}>
              <Route path="/" element={<MobileLoginPage />} />
            </Route>
            <Route element={<MobileLayout />}>
              <Route path="/mobileMain" element={<MobileMain />} />
              <Route path="/mobileMovieContentPage" element={<MobileMovieContentPage />} />
            </Route>
          </Routes>
        </MobileView>
      </HashRouter>
      </>
  )
}

export default App

