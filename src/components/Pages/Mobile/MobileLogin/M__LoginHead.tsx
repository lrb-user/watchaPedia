import React from 'react';
import { Link } from 'react-router-dom';

const M__LoginHead:React.FC = () => {
    return(
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">로그인</h2>
                <Link to="/main" className="text-xs">비밀번호를 잊어버리셨나요?</Link>
            </div>
        </>
    )
}

export default M__LoginHead;