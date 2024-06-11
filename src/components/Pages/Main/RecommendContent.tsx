import React from 'react';
import RecommendContentTitle from './RecommentContentTitle';
import RecommendContentBody from './RecommendContentBody';

const recommendItems = [
    {id:1, subDesc1:'#추천리스트', title:'화제의 중드', subDesc2:'지금 가장 사랑받고 있는 중드가 궁금하다면?', src:'/src/assets/images/img1.jpg'},
    {id:2, subDesc1:'#ㅊㄹ의 해', title:'행운을 빌어용', subDesc2:'올해는 모두 찬란하기를, 새해맞이 영화 추천', src:'/src/assets/images/img2.jpg'}
]

const RecommendContent:React.FC = () => {
    return(
        <>
            <div id="RecommentContent" className="flex gap-5">
                {recommendItems.map((recommendItem) => (
                    <div className="grid gap-2 flex-1">
                        <RecommendContentTitle subDesc1={recommendItem.subDesc1} title={recommendItem.title} subDesc2={recommendItem.subDesc2} />
                        <RecommendContentBody src={recommendItem.src} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default RecommendContent;