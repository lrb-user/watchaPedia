import React from 'react';

import { Link } from 'react-router-dom';

const LoginFooter:React.FC = () => {
    return(
        <>
            <Link to="/main" className="inline-flex items-center justify-center bg-primary text-white rounded-full w-full py-4 font-bold">로그인</Link>
        </>
    )
}

export default LoginFooter;