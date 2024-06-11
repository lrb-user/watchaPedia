import React,{ useState } from 'react';

import TabHead from '../../Common/Tab/TabHead';
import TabBody from '../../Common/Tab/TabBody';

import ThisMonthBestContentMovie from '../ThisMonthBestContent/ThisMonthBestContentMovie';
import ThisMonthBestContentTV from '../ThisMonthBestContent/ThisMonthBestContentTV';
import ThisMonthBestContentBook from '../ThisMonthBestContent/ThisMonthBestContentBook';

const tabData = [
    {id:0, name:'영화', icon:'' ,components:<ThisMonthBestContentMovie />},
    {id:1, name:'TV', components:<ThisMonthBestContentTV />},
    {id:2, name:'책', components:<ThisMonthBestContentBook />},
]

const BestContentOfThisMonthBody:React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    const ClickTab = (tab:any) => {
        setActiveTab(tab);
    }
    return(
        <>
            <div className="grid gap-6">
                <ul className="flex justify-center gap-2 max-w-2xl w-full mx-auto">
                    {tabData.map((data,index) => (
                        <TabHead 
                            key={data.id} 
                            onClick={() => ClickTab(index)} 
                            name={data.name} 
                            active={activeTab === data.id} 
                        />                                                        
                    ))}
                </ul>
                <TabBody components={tabData[activeTab].components} />
            </div>
        </>
    )
}

export default BestContentOfThisMonthBody;