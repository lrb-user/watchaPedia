import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import '../../../css/swiper/swiper.css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const BestArtistContent:React.FC = () => {
    return(
        <>
            <div className="grid gap-8">
                <h2 className="text-white text-2xl font-bold">이달의 아티스트</h2>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loopAdditionalSlides={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                    // spaceBetween={10}
                    coverflowEffect={{
                        rotate: 0,
                        stretch:50,
                        // slideShadows: false,
                        depth:150,
                        modifier:1,
                        slideShadows:true,
                    }}
                    pagination={false}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper artistSwiper"
                >
                    <SwiperSlide>
                        <div className="text-center rounded-full relative">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist1.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.1</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">톰하디</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center rounded-full">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist2.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.2</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">배수지</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center rounded-full">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist3.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.3</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">베넥딕트 컴버배치</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center rounded-full">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist4.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.4</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">콜린 퍼스</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center rounded-full">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist5.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.5</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">고마츠 나나</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center rounded-full">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist6.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.6</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">강동원</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center rounded-full">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist7.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.7</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">신카이 마코토</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center rounded-full relative">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist1.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.8</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">톰하디</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center rounded-full">
                            <div className="">
                                <img src="/watchaPedia/assets/images/artist2.jpg" alt="" />
                            </div>
                            {/* <p className="absolute top-0 left-0 bg-[#00000080] text-white p-4 font-bold">NO.9</p> */}
                            <p className="w-full h-[50px] absolute left-0 bottom-0 bg-[#00000080] text-white p-4 font-bold">배수지</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default BestArtistContent;