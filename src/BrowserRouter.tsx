    import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Pages/LoginPage';
import Main from './components/Pages/Main';
import MovieContentPage from './components/Pages/MovieContentPage';
import LoginLayout from './components/Layout/LoginLayout';

const BrowserRouter:React.FC = () => {
    return(
        <>
           <Router>
                <Routes>
                    <Route element={<LoginLayout />}>
                        <Route path="/" element={<LoginPage />}/>
                    </Route>
                    <Route element={<Layout/>}>
                        <Route path="/main" element={<Main />}/>
                        <Route path="/movieContentPage" element={<MovieContentPage />}/>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default BrowserRouter;