import React from 'react';
import InputDefault from './InputDefault';

const InputWithButton:React.FC = () => {
    return(
        <>
            <div className="w-full h-[50px]">
                <InputDefault 
                    type="text"
                    placeholder="감상평을 작성해주세요."
                    width="w-[calc(100%-60px)]"
                    size="lg"
                    styles="text-black rounded-tr-none rounded-br-none"
                />
                <button className="w-[60px] h-full bg-primary text-white">등록</button>
            </div>
        </>
    )
}

export default InputWithButton;