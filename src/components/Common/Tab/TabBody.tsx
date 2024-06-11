import React from 'react';

interface tabBodyProps{
    components:React.ReactNode;
}

const TabBody:React.FC<tabBodyProps>= ({components}) => {
    return(
        <>
            <div className="flex justify-center gap-5">
                {components}
            </div>
        </>
    )
}

export default TabBody;