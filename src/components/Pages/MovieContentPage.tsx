import React from 'react';

import Visiual from '../Common/Visiual/Visiual';
import MovieInfo from './MovieContentPage/MovieInfo';
import MovieCast from './MovieContentPage/MovieCast';
import CollactionContent from './Main/CollactionContent';
import MovieReview from './MovieContentPage/MovieReview';

const MovieContentPage:React.FC = () => {
    return(
        <>  
        <div className="grid gap-10 w-full bg-black px-16 py-8 text-white">
            {/* 1. visiual */}
            <Visiual />
            {/* 2. movieInfo */}
            <MovieInfo />
            {/* 3. 감독.출연 */}
            <MovieCast />
            {/* 4. 코멘트 */}
            <MovieReview />
            {/* 5. 왓챠피디아 컬랙션 */}
            <CollactionContent />
        </div>
        </>
    )
}

export default MovieContentPage;