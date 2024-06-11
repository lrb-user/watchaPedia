import React from 'react';
import M__bestContentOfThisMonthBody from './M__bestContentOfThisMonthBody';

const M__bestContentOfThisMonth:React.FC = () => {
    return(
        <>
            <div className="grid gap-4">
                <h2 className="text-white text-xl font-bold">이달의 추천 콘텐츠</h2>
                <M__bestContentOfThisMonthBody />
            </div> 
        </>
    )
}

export default M__bestContentOfThisMonth;