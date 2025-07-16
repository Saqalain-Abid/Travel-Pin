import { useState, useEffect } from 'react';

export default function Tabs({ tabs = [], defaultActive = '', onTabChange }) {
    const [activeTab, setActiveTab] = useState(defaultActive || tabs[0]);

    useEffect(() => {
        if (onTabChange) onTabChange(activeTab);
    }, [activeTab, onTabChange]);
    
    return (
        <div className="overflow-x-auto">
            <nav className="flex space-x-4 py-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-sm font-medium px-4 py-3 rounded-4xl transition 
                            ${activeTab === tab
                                ? 'border border-blue-600 text-blue-600 hover:cursor-pointer'
                                : 'text-gray-700 hover:bg-gray-100 hover:cursor-pointer'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </nav>
        </div>
    );
}
