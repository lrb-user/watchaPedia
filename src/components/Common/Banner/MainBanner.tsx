import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; //기존 swiper css파일
import '../../../css/swiper/swiper.css'; //새로 커스텀한 css파일
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation ,Autoplay } from 'swiper/modules';

const bannerData = [
    {id:1, src:'/src/assets/images/mainBanner1.jpg', movieNameSrc:'/src/assets/images/mainBanner1Title.png', desc1:'혼자가 좋지만 연애는 하고 싶어!', desc2:'이동욱 X 임수정의 현실 공감 로맨스'},
    {id:2, src:'/src/assets/images/mainBanner2.jpg', movieNameSrc:'/src/assets/images/mainBanner2Title.png', desc1:'하늘에서 내려온 엄마, 그리워서 돌아온 딸', desc2:'김해숙 X 신민아의 힐링 판타지'},
    {id:3, src:'/src/assets/images/mainBanner3.jpg', movieNameSrc:'/src/assets/images/mainBanner3Title.png', desc1:'이상하고 아름다운 도시,', desc2:'예측불허 상황들이 펼쳐진다'},
    {id:4, src:'/src/assets/images/mainBanner4.jpg', movieNameSrc:'/src/assets/images/mainBanner4Title.png', desc1:'수많은 곡들로 대한민국 가요계를 대표하며 최정상의 자리를 지켜온 그룹 샤이니', desc2:'최고의 퍼포먼스로 돌아온 그들의 여섯 번째 콘서트'},
]

const MainBanner:React.FC = () => {
    return(
        <>
            <Swiper
                pagination={{
                type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{ delay:2000, disableOnInteraction: false }}
                id="mainBanner"
                className="mySwiper mainSwiper"
            >
                {bannerData.map((data) => (
                    <>
                        <SwiperSlide key={data.id} className="swiper1 relative">
                            <img src={data.src} className="w-full" alt="" />
                            <div className="grid gap-5 absolute bottom-16 left-10">
                                <img src={data.movieNameSrc} alt="" />
                                <div className="text-lg font-bold">
                                    <p>{data.desc1}</p>
                                    <p>{data.desc2}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </>
                  ))}
            </Swiper>
        </>
    )
}

export default MainBanner;