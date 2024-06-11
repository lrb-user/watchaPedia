import React from 'react';

import Visiual from '../../Common/Visiual/Mobile/Visiual';
import M__movieInfo from './MobileMovieContent/M__movieInfo';
import M__movieReview from './MobileMovieContent/M__movieReview';
import M__collactionContent from './MobileMain/M__collactionContent';
import M__movieCast from './MobileMovieContent/M__movieCast';
import M__movieRating from './MobileMovieContent/M__movieRating';

const MobileMovieContentPage:React.FC = () => {
        return(
        <>
            <div className="grid gap-10 w-full bg-black text-white">
                {/* 1. visiual */}
                <Visiual />
                {/* star */}
                <M__movieRating />
                 {/* 2. movieInfo */}
                <M__movieInfo />
                {/* 3. 감독.출연 */}
                <M__movieCast />
                {/* 4. review */}
                <M__movieReview />
                {/* 왓챠피디아 컬랙션 */}
                <M__collactionContent />
            </div>
        </>
    )
}

export default MobileMovieContentPage;