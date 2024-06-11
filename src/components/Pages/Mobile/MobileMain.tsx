import React from 'react';



import M__AdvertisementBanner from '../../Common/Banner/Mobile/M__AdvertisementBanner';
import M__MainBanner from '../../Common/Banner/Mobile/M__MainBanner';
import M__top10Content from './MobileMain/M__top10Content';
import M__bestContentOfThisMonth from './MobileMain/M__bestContentOfThisMonth';
import M__RecommendContent from './MobileMain/M__RecommendContent';
import M__collactionContent from './MobileMain/M__collactionContent';
import M__BestArtistContent from './MobileMain/M__BestArtistContent';

const MobileMain:React.FC = () => {
    return(
        <>
            <div className="grid gap-y-8 text-white">
                {/* mainBanner */}
                <M__MainBanner />
                {/* top10 */}
                <M__top10Content />
                {/* thisMonthBestContent */}
                <M__bestContentOfThisMonth />
                {/* 광고 banner */}
                <M__AdvertisementBanner />
                {/* 추천콘텐츠 */}
                <M__RecommendContent />
                {/* 이달의 아티스트 */}
                <M__BestArtistContent /> 
                {/* 왓챠피디아 컬랙션 */}
                <M__collactionContent />                 
            </div>
        </>
    )
}

export default MobileMain;