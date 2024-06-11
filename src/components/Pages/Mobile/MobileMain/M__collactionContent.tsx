import React from 'react';

const collactionData = [
    {id:0, src1:'collection1-1.jpg', src2:'collection1-2.jpg',src3:'collection1-3.jpg',src4:'collection1-4.jpg'},
    {id:1, src1:'collection2-1.jpg', src2:'collection2-2.jpg',src3:'collection2-3.jpg',src4:'collection2-4.jpg'},
    {id:2, src1:'collection3-1.jpg', src2:'collection3-2.jpg',src3:'collection3-3.jpg',src4:'collection3-4.jpg'},
    {id:3, src1:'collection4-1.jpg', src2:'collection4-2.jpg',src3:'collection4-3.jpg',src4:'collection4-4.jpg'},
]

const M__collactionContent:React.FC = () => {
    return(
        <>
            <div className="grid gap-4">
                <h2 className="text-white text-xl font-bold">왓챠피디아 컬랙션</h2>
                <ul className="grid grid-cols-2 gap-2">
                    {collactionData.map((data) => (
                        <li className="flex-1 rounded-md relative bg-white p-1">
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-2 gap-2 transition duration-500 hover:scale-110">
                                    <div>
                                        <img src={`/src/assets/images/${data.src1}`} alt='' />
                                    </div>
                                    <div>
                                        <img src={`/src/assets/images/${data.src2}`} alt='' />
                                    </div>
                                    <div>
                                        <img src={`/src/assets/images/${data.src3}`} alt='' />
                                    </div>
                                    <div>
                                        <img src={`/src/assets/images/${data.src4}`} alt='' />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>   
        </>
    )
}

export default M__collactionContent;