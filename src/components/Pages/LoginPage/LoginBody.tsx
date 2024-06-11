import React from 'react';

import InputDefault from '../../Common/Form/Input/InputDefault';

const LoginBody:React.FC = () => {
    return(
        <>
            <div id="loginBody" className="grid gap-y-2">
                <InputDefault 
                    type="email"
                    placeholder="이메일(example@gmail.com)"
                    styles="w-full text-black" 
                />
                <InputDefault 
                    type="password"
                    placeholder="비밀번호"
                    styles="w-full text-black"
                />
            </div>
        </>
    )
}

export default LoginBody;