import React from 'react';

interface RecommendContentTitleProps{
    subDesc1:string;
    subDesc2:string;
    title:string;
}

const RecommendContentTitle:React.FC<RecommendContentTitleProps> = ({subDesc1, subDesc2, title}) => {
    return(
        <>
            <div>
                <p className="text-sm">{subDesc1}</p>
                <p className="text-lg font-bold">{title}</p>
                <p className="text-base">{subDesc2}</p>
            </div>
        </>
    )
}

export default RecommendContentTitle;