import React from 'react';

import BestContentOfThisMonthBody from './BestContentOfThisMonthBody';

const BestContentofThisMonth:React.FC = () => {

    return(
        <>
            <div id="BestContentOfThisMonth" className="grid gap-4">
                <h2 className="text-white text-2xl font-bold">이달의 추천 콘텐츠</h2>
                <BestContentOfThisMonthBody />
            </div>
        </>
    )
}

export default BestContentofThisMonth;