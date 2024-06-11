import React from 'react';

const movieReviewItems = [
    {id:1, name:'길동', grade:'2.5', review:'좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.11111111111111', numberOfLike:'164', comment:'9'},
    {id:2, name:'길동', grade:'3.5', review:'좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.', numberOfLike:'164', comment:'9'},
    {id:3, name:'길동', grade:'2.5', review:'좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.', numberOfLike:'164', comment:'9'},
    {id:4, name:'길동', grade:'2.5', review:'좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.', numberOfLike:'164', comment:'9'},
]

const M__movieReviewList:React.FC = () => {
    return(
        <>
            <ul className="grid gap-4 h-[300px] overflow-auto rounded-md">
                {movieReviewItems.map((data) => (
                    <li key={data.id} className="bg-[#191a1c] rounded-md p-2 shadow-[0px_0px_3px_4px_#2e2e2e]">
                        <div className="flex justify-between px-4 py-4 border-b border-solid border-gray-200">
                            <div className="flex gap-2 items-center">
                                <img src="src/assets/images/MovieContent/profile1.jpg" className="w-[32px] h-[32px] rounded-full" alt="" />
                                <p>{data.name}</p>
                            </div>
                            <div className="flex items-center gap-x-0.5 px-3 bg-primary rounded-full before:bg-star before:bg-no-repeat before:bg-cover before:w-[18px] before:h-[18px]">
                                <p className="">{data.grade}</p>
                            </div>
                        </div>
                        <div className="px-4 pt-3 h-32 text-sm border-b border-solid border-gray-200 overflow-hidden text-ellipsis">
                            {data.review}
                        </div>
                        <div className="flex gap-2 px-4 py-3 border-b border-solid border-gray-200">
                            <div className="flex items-center gap-1">
                                <img src="src/assets/images/MovieContent/icoGood.svg" alt="" />
                                <p>{data.numberOfLike}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img src="src/assets/images/MovieContent/icoComment.svg" alt="" />
                                <p>{data.comment}</p>
                            </div>
                        </div>
                        <div className="px-4 py-3 text-primary">좋아요</div>
                    </li>
                ))}
                {/* <li className="bg-[#191a1c] rounded-md p-4">
                    <div className="flex justify-between px-4 py-4 border-b border-solid border-gray-200">
                        <div className="flex gap-2 items-center">
                            <img src="src/assets/images/MovieContent/profile1.jpg" className="w-[32px] h-[32px] rounded-full" alt="" />
                            <p>길동</p>
                        </div>
                        <div className="flex items-center gap-x-0.5 px-3 bg-primary rounded-full before:bg-star before:bg-no-repeat before:bg-cover before:w-[18px] before:h-[18px]">
                            <p className="">2.5</p>
                        </div>
                    </div>
                    <div className="px-4 pt-3 h-36 border-b border-solid border-gray-200">
                        좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.
                    </div>
                    <div className="flex gap-2 px-4 py-3 border-b border-solid border-gray-200">
                        <div className="flex items-center gap-1">
                            <img src="src/assets/images/MovieContent/icoGood.svg" alt="" />
                            <p>164</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="src/assets/images/MovieContent/icoComment.svg" alt="" />
                            <p>9</p>
                        </div>
                    </div>
                    <div className="px-4 py-3 text-primary">좋아요</div>
                </li>
                <li className="bg-[#191a1c] rounded-md p-4">
                    <div className="flex justify-between px-4 py-4 border-b border-solid border-gray-200">
                        <div className="flex gap-2 items-center">
                            <img src="src/assets/images/MovieContent/profile1.jpg" className="w-[32px] h-[32px] rounded-full" alt="" />
                            <p>길동</p>
                        </div>
                        <div className="flex items-center gap-x-0.5 px-3 bg-primary rounded-full before:bg-star before:bg-no-repeat before:bg-cover before:w-[18px] before:h-[18px]">
                            <p className="">2.5</p>
                        </div>
                    </div>
                    <div className="px-4 pt-3 h-36 border-b border-solid border-gray-200">
                        좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.
                    </div>
                    <div className="flex gap-2 px-4 py-3 border-b border-solid border-gray-200">
                        <div className="flex items-center gap-1">
                            <img src="src/assets/images/MovieContent/icoGood.svg" alt="" />
                            <p>164</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="src/assets/images/MovieContent/icoComment.svg" alt="" />
                            <p>9</p>
                        </div>
                    </div>
                    <div className="px-4 py-3 text-primary">좋아요</div>
                </li>
                <li className="bg-[#191a1c] rounded-md p-4">
                    <div className="flex justify-between px-4 py-4 border-b border-solid border-gray-200">
                        <div className="flex gap-2 items-center">
                            <img src="src/assets/images/MovieContent/profile1.jpg" className="w-[32px] h-[32px] rounded-full" alt="" />
                            <p>길동</p>
                        </div>
                        <div className="flex items-center gap-x-0.5 px-3 bg-primary rounded-full before:bg-star before:bg-no-repeat before:bg-cover before:w-[18px] before:h-[18px]">
                            <p className="">2.5</p>
                        </div>
                    </div>
                    <div className="px-4 pt-3 h-36 border-b border-solid border-gray-200">
                        좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.
                    </div>
                    <div className="flex gap-2 px-4 py-3 border-b border-solid border-gray-200">
                        <div className="flex items-center gap-1">
                            <img src="src/assets/images/MovieContent/icoGood.svg" alt="" />
                            <p>164</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src="src/assets/images/MovieContent/icoComment.svg" alt="" />
                            <p>9</p>
                        </div>
                    </div>
                    <div className="px-4 py-3 text-primary">좋아요</div>
                </li> */}
            </ul>
        </>
    )
}

export default M__movieReviewList;