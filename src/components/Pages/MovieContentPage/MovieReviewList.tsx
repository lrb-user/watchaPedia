import React from 'react';

const movieReviewItems = [
    {id:1, name:'길동', grade:'2.5', review:'좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.11111111111111', numberOfLike:'164', comment:'9'},
    {id:2, name:'길동', grade:'3.5', review:'좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.', numberOfLike:'164', comment:'9'},
    {id:3, name:'길동', grade:'2.5', review:'좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.', numberOfLike:'164', comment:'9'},
    {id:4, name:'길동', grade:'2.5', review:'좋은 인생 경험했다 생각하라며 손놓으려던 형사까지 실화의 일부라면 그 인간은 제발 어디 가서 뒤통수 제대로 맞고 패가망신하길 바람.', numberOfLike:'164', comment:'9'},
]

const MovieReviewList:React.FC = () => {
    return(
        <>
            <ul className="grid grid-cols-4 gap-4">
                {movieReviewItems.map((movieReviewItem) => (
                    <>
                        <li className="bg-[#191a1c] rounded-md p-4">
                            <div className="flex justify-between px-4 py-4 border-b border-solid border-gray-200">
                                <div className="flex gap-2 items-center">
                                    <img src="/watchaPedia/assets/images/MovieContent/profile1.jpg" className="w-[32px] h-[32px] rounded-full" alt="" />
                                    <p>{movieReviewItem.name}</p>
                                </div>
                                <div className="flex items-center gap-x-0.5 px-3 bg-primary rounded-full before:bg-star before:bg-no-repeat before:bg-cover before:w-[18px] before:h-[18px]">
                                    <p className="">{movieReviewItem.grade}</p>
                                </div>
                            </div>
                            <div className="px-4 pt-3 h-52 border-b border-solid border-gray-200 overflow-hidden text-ellipsis">
                                {movieReviewItem.review}
                            </div>
                            <div className="flex gap-2 px-4 py-3 border-b border-solid border-gray-200">
                                <div className="flex items-center gap-1">
                                    <img src="/watchaPedia/assets/images/MovieContent/icoGood.svg" alt="" />
                                    <p>{movieReviewItem.numberOfLike}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src="/watchaPedia/assets/images/MovieContent/icoComment.svg" alt="" />
                                    <p>{movieReviewItem.comment}</p>
                                </div>
                            </div>
                            <div className="px-4 py-3 text-primary">좋아요</div>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default MovieReviewList;