import React from 'react';

const keywordItems = [
    {id:1, keyword1:'#시민덕희 정보', keyword2:'#시민덕희 출연진'},
    {id:2, keyword1:'#시민덕희 관람평', keyword2:'#시민덕희 평점'},
    {id:3, keyword1:'#시민덕희 실화', keyword2:'#시민덕희 포토'},
    {id:4, keyword1:'#시민덕희 쿠키', keyword2:'#시민덕희 무대인사'},
    {id:5, keyword1:'#시민덕희 리뷰', keyword2:'#시민덕희 등장인물'},
]

const RelatedKeyword:React.FC = () => {
    return(
        <>
            <div className="w-[40%] grid gap-y-4 auto-rows-max">
                <div className="font-bold text-xl">연관검색어</div>
                <div className="flex flex-wrap gap-2">
                    {keywordItems.map((keywordItem) => (
                        <>
                            <div key={keywordItem.id} className="w-[calc(100%/2)">
                                <p className="mr-2 border-2 border-solid border-[#f82f62] inline-flex px-3 py-2 text-sm text-[#f82f62] rounded-full duration-500 hover:bg-primary hover:text-white">{keywordItem.keyword1}</p>
                                <p className="border-2 border-solid border-[#f82f62] inline-flex px-3 py-2 text-sm text-[#f82f62] rounded-full duration-500 hover:bg-primary hover:text-white">{keywordItem.keyword1}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RelatedKeyword;