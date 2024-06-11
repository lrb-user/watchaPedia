import React from 'react';
import InputDefault from '../../../Common/Form/Input/InputDefault';

const M__LoginBody:React.FC = () => {
    return(
        <>
         <div className="grid gap-y-2">
            <InputDefault 
                type="email"
                placeholder='이메일(example@gamil.com)'
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

export default M__LoginBody;