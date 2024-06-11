import React from 'react';
import M__LoginHead from './MobileLogin/M__LoginHead';
import M__LoginBody from './MobileLogin/M__LoginBody';
import M__LoginFooter from './MobileLogin/M__LoginFooter';

const MobileLoginPage:React.FC = () => {
    return(
        <>
            <div className="h-[calc(100%-4rem-3rem)] flex items-center justify-center">
                <div className="grid gap-y-4 w-[300px]">
                    <M__LoginHead />
                    <M__LoginBody />
                    <M__LoginFooter />
                </div>
            </div>   
        </>
    )
}

export default MobileLoginPage;