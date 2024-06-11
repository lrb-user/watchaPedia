import React from 'react';

interface RecommendContentBodyProps{
    src:string;
}

const RecommendContentBody:React.FC<RecommendContentBodyProps> = ({src}) => {
    return(
        <>
            <a href="" className="overflow-hidden">
                <img src={src} className="transition duration-500 hover:scale-110" alt="" />
            </a>
        </>
    )
}

export default RecommendContentBody;