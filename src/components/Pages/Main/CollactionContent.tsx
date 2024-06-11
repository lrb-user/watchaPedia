import React from 'react';

const collactionData = [
    {id:1, src1:'/src/assets/images/collection1-1.jpg', src2:'/src/assets/images/collection1-2.jpg', src3:'/src/assets/images/collection1-3.jpg', src4:'/src/assets/images/collection1-4.jpg', desc:'#부산국제영화제 수상작'},
    {id:2, src1:'/src/assets/images/collection2-1.jpg', src2:'/src/assets/images/collection2-2.jpg', src3:'/src/assets/images/collection2-3.jpg', src4:'/src/assets/images/collection2-4.jpg', desc:'#부산국제영화제 수상작'},
    {id:3, src1:'/src/assets/images/collection3-1.jpg', src2:'/src/assets/images/collection3-2.jpg', src3:'/src/assets/images/collection3-3.jpg', src4:'/src/assets/images/collection3-4.jpg', desc:'#부산국제영화제 수상작'},
    {id:4, src1:'/src/assets/images/collection4-1.jpg', src2:'/src/assets/images/collection4-2.jpg', src3:'/src/assets/images/collection4-3.jpg', src4:'/src/assets/images/collection4-4.jpg', desc:'#부산국제영화제 수상작'},
]

const CollactionContent:React.FC = () => {
    return(
        <>
            <div className="grid gap-4">
                <h2 className="text-white text-2xl font-bold">왓챠피디아 컬랙션</h2>
                <ul className="flex gap-6">
                    {collactionData.map((data) => (
                        <li className="flex-1 rounded-md relative">
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-2 gap-2 transition duration-500 hover:scale-110">
                                    <div>
                                        <img src={data.src1} alt="" />
                                    </div>
                                    <div>
                                        <img src={data.src2} alt="" />
                                    </div>
                                    <div>
                                        <img src={data.src3} alt="" />
                                    </div>
                                    <div>
                                        <img src={data.src4} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-2.5">{data.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CollactionContent;