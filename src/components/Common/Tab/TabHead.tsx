import React from 'react';

interface tabHeadProps{
    key:number;
    name:string;
    onClick: () => void;
    active?:boolean;
}

const TabHead:React.FC<tabHeadProps> = ({key, name, onClick, active}) => {
    
    return(
        <>
            <li key={key} onClick={onClick} className={`${active ? 'bg-primary' : ''} flex-1 py-2 text-center cursor-pointer`}>
                {name}
            </li> 
        </>
    )
}

export default TabHead;