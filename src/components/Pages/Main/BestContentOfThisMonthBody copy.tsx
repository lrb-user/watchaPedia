import React, { useState } from 'react';

import TabHead from '../../Common/Tab/TabHead';
import TabBody from '../../Common/Tab/TabBody';

import ThisMonthBestContentMovie from '../ThisMonthBestContent/ThisMonthBestContentMovie';
import ThisMonthBestContentTV from '../ThisMonthBestContent/ThisMonthBestContentTV';
import ThisMonthBestContentBook from '../ThisMonthBestContent/ThisMonthBestContentBook';

const tabs = [
    { id: 0, name: '영화', icon: '', component: <ThisMonthBestContentMovie /> },
    { id: 1, name: 'TV', component: <ThisMonthBestContentTV /> },
    { id: 2, name: '책', component: <ThisMonthBestContentBook /> },
];

const BestContentOfThisMonthBody: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState(tabs[0].component);

    const ClickTab = (component: any) => {
        setActiveComponent(component);
    };

    return (
        <>
            <div className="grid gap-6">
                <ul className="flex justify-center gap-2 max-w-2xl w-full mx-auto">
                    {tabs.map((tab) => (
                        <TabHead
                            key={tab.id}
                            onClick={() => ClickTab(tab)}
                            name={tab.name}
                            active={activeComponent === tab.component}
                        />
                    ))}
                </ul>
                <TabBody components={activeComponent} />
            </div>
        </>
    );
};

export default BestContentOfThisMonthBody;
