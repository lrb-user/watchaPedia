import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation ,Autoplay } from 'swiper/modules';

const castItems = [
    {id:1, src:'src/assets/images/MovieContent/actor2.jpg', cast:'이무생 | 총책'},
    {id:2, src:'src/assets/images/MovieContent/actor3.jpg', cast:'박성근 | 특별출연'},
    {id:3, src:'src/assets/images/MovieContent/actor4.jpg', cast:'라미란 | 덕희'},
    {id:4, src:'src/assets/images/MovieContent/actor5.jpg', cast:'박병은 | 박형사'},
    {id:5, src:'src/assets/images/MovieContent/actor6.jpg', cast:'정지호'},
    {id:6, src:'src/assets/images/MovieContent/actor7.jpg', cast:'공명 | 재민'},
    {id:7, src:'src/assets/images/MovieContent/actor8.jpg', cast:'장윤주 | 숙자'},
    {id:8, src:'src/assets/images/MovieContent/actor9.jpg', cast:'김율호'},
]

const MovieCast:React.FC = () => {
    return(
        <>
            <div className="grid gap-4">
                <h2 className="text-white text-2xl font-bold">감독/출연</h2>
                <Swiper
                    slidesPerView={5.5}
                    spaceBetween={20}
                    autoplay={{ delay:2000, disableOnInteraction: false }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper appearSwiper"
                >
                    {castItems.map((castItem) => (
                        <>
                            <SwiperSlide key={castItem.id}>
                                <img src={castItem.src} alt="" />
                                <div className="mt-2">{castItem.cast}</div>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default MovieCast;