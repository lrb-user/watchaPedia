import React from 'react';

const M__movieInfo:React.FC = () => {
    return(
        <>
            <div className="grid gap-y-4">
                <div className="grid gap-y-4 auto-rows-max">
                    <p className="font-bold text-xl">영화줄거리</p>
                    <div className="text-sm">
                        <p>내 돈을 사기 친 그놈이 구조 요청을 해왔다!</p>
                        <br></br>
                        <p>
                            세탁소 화재로 인해 대출상품을 알아보던 생활력 만랩 덕희에게 어느날,
                            거래 은행의 손대리가 합리적인 대출상품을 제안하겠다며 전화를 걸어온다.
                            대출에 필요하다며 이런저런 수수료를 요구한 손 대리에게 돈을 보낸 덕희는
                            이 모든 과정이 보이스피싱이었음을 뒤늦게 인지하고 충격에 빠진다.
                            전 재산을 잃고 아이들과 거리로 나앉게 생긴 덕희에게 어느날 손대리가 다시 전활르 걸어오는데...
                        </p>
                        <br></br>
                        <p>이번엔 살려달라는 전화다!</p>
                        <br></br>
                        <p>
                            경찰도 포기한 사건, 덕희는 손대리도 구출하고 잃어버린 돈도 찾겠다는 일념으로 
                            필살기 하나씩 장착한 직장 동료들과 함께 중국 칭다오호 직접 날아간다.
                        </p>
                    </div>
                </div>
                <div className="w-[280px] h-[400px] mx-auto bg-moviePoster bg-no-repeat bg-center bg-cover"></div>
            </div>
        </>
    )
}

export default M__movieInfo;