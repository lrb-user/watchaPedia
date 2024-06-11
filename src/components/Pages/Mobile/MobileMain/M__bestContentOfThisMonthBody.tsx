import React,{ useState } from 'react';
import M__ThisMonthBestContentBook from './M__ThisMonthBestContentBook';
import M__ThisMonthBestContentMovie from './M__ThisMonthBestContentMovie';
import M__ThisMonthBestContentTV from './M__ThisMonthBestContentTV';
import TabHead from '../../../Common/Tab/TabHead';
import TabBody from '../../../Common/Tab/TabBody';

const tabData = [
    {id:0, name:'영화', icon:'' ,components:<M__ThisMonthBestContentMovie />},
    {id:1, name:'TV', components:<M__ThisMonthBestContentTV />},
    {id:2, name:'책', components:<M__ThisMonthBestContentBook />},
]

const M__bestContentOfThisMonthBody:React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    const ClickTab = (tab:any) => {
        setActiveTab(tab);
    }
    return(
        <>
            <div className="grid gap-4">
                <ul className="flex justify-center gap-2 max-w-xs w-full mx-auto">
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

export default M__bestContentOfThisMonthBody;