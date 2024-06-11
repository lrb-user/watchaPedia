import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation ,Autoplay } from 'swiper/modules';

const castData = [
    {id:1, src:'src/assets/images/MovieContent/actor2.jpg', cast:'이무생', role:'총책'},
    {id:2, src:'src/assets/images/MovieContent/actor3.jpg', cast:'박성근', role:'특별출연'},
    {id:3, src:'src/assets/images/MovieContent/actor4.jpg', cast:'라미란', role:'덕희'},
    {id:4, src:'src/assets/images/MovieContent/actor5.jpg', cast:'박병은', role:'박형사'},
    {id:5, src:'src/assets/images/MovieContent/actor6.jpg', cast:'정지호', role:''},
    {id:6, src:'src/assets/images/MovieContent/actor7.jpg', cast:'공명', role:'재민'},
    {id:7, src:'src/assets/images/MovieContent/actor8.jpg', cast:'장윤주', role:'숙자'},
    {id:8, src:'src/assets/images/MovieContent/actor9.jpg', cast:'김율호', role:''},
]

const M__movieCast:React.FC = () => {
    return(
        <>
            <div className="grid gap-4">
                <h2 className="text-white text-xl font-bold">감독/출연</h2>
                <Swiper
                    slidesPerView={3.2}
                    spaceBetween={10}
                    autoplay={{ delay:2000, disableOnInteraction: false }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper appearSwiper"
                >
                    {castData.map((data) => (
                        <SwiperSlide
                            key={data.id}
                            className="grid gap-y-2"
                        >
                            <img src={data.src} alt="" />
                            <div className="text-sm">
                                <p>{data.cast}</p>
                                {data.role === "" ? <p className="opacity-0">hide용</p> :
                                    <p className="text-xs">{data.role}</p>
                                }
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default M__movieCast;