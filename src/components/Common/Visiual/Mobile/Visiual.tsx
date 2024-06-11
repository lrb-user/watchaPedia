import React from 'react';

const Visiual:React.FC = () => {
    return(
        <>
            <div className="relative">
                <div className="w-full h-[400px] bg-black grid overflow-hidden">
                    <div className="bg-movieBg1 bg-no-repeat bg-center bg-cover duration-1000 hover:scale-125"></div>
                </div>
                <div className="absolute grid gap-1 bottom-8 left-4 text-white">
                    <h2 className="text-3xl font-bold">시민덕희</h2>
                    <p className="text-sm">시민덕희</p>
                    <p className="text-sm">2021 · 드라마 · 한국</p>
                    <p className="text-sm">1시간 53분 · 15분</p>
                    <p className="text-sm">예매 순위 2위(9.3%)</p>
                    <p className="text-sm">개봉 7일째</p>
                    <p className="text-sm">누적관객 55.1만명</p>
                </div>
            </div>
        </>
    )
}

export default Visiual;