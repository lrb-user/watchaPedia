import React, { useEffect } from 'react';

import MainBanner from '../Common/Banner/MainBanner';
import Top10Content from './Main/Top10Content';
import BestContentofThisMonth from './Main/BestContentOfThisMonth';
import AdvertisementBanner from '../Common/Banner/AdvertisementBanner';
import RecommendContent from './Main/RecommendContent';
import BestArtistContent from './Main/BestArtistContent';
import CollactionContent from './Main/CollactionContent';


const Main:React.FC = () => {
    //처음 페이지 랜더링될때만 실행
    useEffect(()=>{
    	alert('왼쪽 메뉴 "영화, TV, 책, 웹툰" 중\n하나를 클릭하면 다음 페이지로 이동합니다. ');
    },[]);
    return(
        <>
           <div className="w-full bg-black px-16 py-8 grid gap-10 text-white">
                {/* mainBanner */}
                <MainBanner />
                {/* top10 */}
                <Top10Content />
                {/* bestContentofThisMonth */}
                <BestContentofThisMonth />
                {/* 광고 banner */}
                <AdvertisementBanner />
                {/* 추천 콘텐츠 */}
                <RecommendContent />
                {/* 이달의 아티스트 */}
                <BestArtistContent />
                {/* 왓챠피디아 컬랙션 */}
                <CollactionContent />
            </div>
        </>
    )
}

export default Main;