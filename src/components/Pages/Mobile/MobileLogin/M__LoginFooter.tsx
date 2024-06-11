import React from 'react';
import { Link } from 'react-router-dom';

const M__LoginFooter:React.FC = () => {
    return(
        <>
            <Link to="/mobileMain" className="inline-flex items-center justify-center bg-primary text-white rounded-full w-full py-4 font-bold">로그인</Link>
        </>
    )
}

export default M__LoginFooter;