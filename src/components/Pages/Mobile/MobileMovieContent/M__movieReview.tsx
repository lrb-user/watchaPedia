import React from 'react';
import M__movieReviewList from './M__movieReviewList';

const M__movieReview:React.FC = () => {
    return(
        <>
            <div className="grid gap-4">
                <h2 className="text-white text-xl font-bold">
                    코멘트&nbsp;<span className="text-primary font-light">500+</span>
                </h2>
                <div className="w-full h-[50px]">
                    <input type="text" placeholder='감상평을 작성해주세요.' className="w-[calc(100%-60px)] h-full text-black"/>
                    <button className="w-[60px] h-full bg-primary text-white">등록</button>
                </div>
                <M__movieReviewList />
            </div>
        </>
    )
}

export default M__movieReview;