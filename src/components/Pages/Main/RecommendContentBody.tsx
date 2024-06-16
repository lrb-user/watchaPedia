import React from 'react';
import { Link } from 'react-router-dom';

interface RecommendContentBodyProps{
    src:string;
}

const RecommendContentBody:React.FC<RecommendContentBodyProps> = ({src}) => {
    return(
        <>
            <Link to="/movieContentPage" className="overflow-hidden">
                <img src={src} className="transition duration-500 hover:scale-110" alt="" />
            </Link>
        </>
    )
}

export default RecommendContentBody;