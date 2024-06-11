import React, { useEffect } from 'react';

import LoginHead from './LoginPage/LoginHead';
import LoginBody from './LoginPage/LoginBody';
import LoginFooter from './LoginPage/LoginFooter';

const LoginPage:React.FC = () => {
    //처음 페이지 랜더링될때만 실행
    useEffect(()=>{
    	alert('로그인 버튼을 클릭하면 메인 페이지로 이동합니다.');
    },[]);
    return(
        <>
            <div id="loginPage" className="h-[calc(100%-4rem-6rem)] flex items-center justify-center">
                <div className="grid gap-y-4 w-[300px]">
                    <LoginHead />
                    <LoginBody />
                    <LoginFooter />
                </div>
            </div>
        </>
    )
}

export default LoginPage;