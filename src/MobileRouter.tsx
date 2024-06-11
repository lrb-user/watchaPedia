import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MobileLoginPage from './components/Pages/Mobile/MobileLoginPage';
import MobileLoginLayout from './components/Layout/MobileLoginLayout';
import MobileLayout from './components/Layout/MobileLayout';
import MobileMain from './components/Pages/Mobile/MobileMain';
import MobileMovieContentPage from './components/Pages/Mobile/MobileMovieContentPage';

const MobileRouter:React.FC = () => {
    return(
        <>
           <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route element={<MobileLoginLayout />}>
                        <Route path="/" element={<MobileLoginPage />}/>
                    </Route>
                    <Route element={<MobileLayout />}>
                        <Route path="/mobileMain" element={<MobileMain />}/>
                        <Route path="/mobileMovieContentPage" element={<MobileMovieContentPage />}/>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default MobileRouter;