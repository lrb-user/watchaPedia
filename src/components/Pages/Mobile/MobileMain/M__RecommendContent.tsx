import React from 'react';

const recommendData = [
    {id:0, subTitle:'#추천리스트', title:'화제의 중드', content:'지금 가장 사랑받고 있는 중드가 궁금하다면?', src:'/src/assets/images/img1.jpg'},
    {id:1, subTitle:'#ㅊㄹ의 해', title:'행운을 빌어용', content:'올해는 모두 찬란하기를, 새해맞이 영화 추천?', src:'/src/assets/images/img2.jpg'},
]

const M__RecommendContent:React.FC = () => {
    return(
        <>
            <div className="grid gap-y-8">
                {recommendData.map((data) => (
                    <div className="grid gap-2 flex-1">
                        <div>
                            <p className="text-sm">{data.subTitle}</p>
                            <p className="text-lg font-bold">{data.title}</p>
                            <p className="text-base">{data.content}</p>
                        </div>
                        <a href="" className="overflow-hidden">
                            <img src={data.src} className="transition duration-500 hover:scale-110" alt="" />
                        </a>
                    </div>
                ))}
            </div>  
        </>
    )
}

export default M__RecommendContent;