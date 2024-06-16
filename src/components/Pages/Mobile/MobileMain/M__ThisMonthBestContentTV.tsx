import React from 'react';

const tvData = [
    {id:0, src:'/watchaPedia/assets/images/recommendTv1.jpg', name:'소년시대', country:'2023 한국', grade:'4.5점'},
    {id:1, src:'/watchaPedia/assets/images/recommendTv2.jpg', name:'위시', country:'2023 미국', grade:'4.5점'},
    {id:2, src:'/watchaPedia/assets/images/recommendTv1.jpg', name:'소년시대', country:'2023 한국', grade:'4.5점'},
    {id:3, src:'/watchaPedia/assets/images/recommendTv1.jpg', name:'소년시대', country:'2023 한국', grade:'4.5점'},
]

const M__ThisMonthBestContentTV:React.FC = () => {
    return(
        <>
            <div id="tv" className="grid grid-cols-2 gap-x-5 gap-y-6">
                {tvData.map((data) => (
                    <a href="" className="grid gap-x-5 gap-y-3">
                        <div className="">
                            <img src={data.src} className="w-full" alt="" />
                        </div>
                        <div className="text-center">
                            <p>{data.name}</p>
                            <p>{data.country}</p>
                            <p className="inline-flex items-center gap-1">
                                평균
                                <svg height="10" viewBox="0 0 12 10" width="12" xmlns="http://www.w3.org/2000/svg" fill="#555765" className="css-ytg36v e1y2ujgu0"><path clip-rule="evenodd" d="M6 8.02L3.14233 9.91131C2.91094 10.0644 2.61352 9.84836 2.68767 9.58097L3.60334 6.27872L0.921531 4.14536C0.704379 3.97262 0.817982 3.62299 1.0952 3.61087L4.51878 3.46128L5.719 0.251483C5.81619 -0.00842059 6.18381 -0.00842094 6.281 0.251483L7.48122 3.46128L10.9048 3.61087C11.182 3.62299 11.2956 3.97262 11.0785 4.14536L8.39666 6.27872L9.31233 9.58097C9.38648 9.84836 9.08906 10.0644 8.85767 9.91131L6 8.02Z" fill-rule="evenodd"></path>
                                </svg>
                                {data.grade}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default M__ThisMonthBestContentTV;