import React from 'react';

const M__movieGrade:React.FC = () => {
    return(
        <>
            <div className="flex justify-center items-center gap-x-2 border-t border-b border-solid border-white py-4">
                <div>
                    <p>평균 별점</p>
                    <p>(3,391명)</p>
                </div>
                <div className="text-4xl">3.0</div>
            </div>
        </>
    )
}

export default M__movieGrade;