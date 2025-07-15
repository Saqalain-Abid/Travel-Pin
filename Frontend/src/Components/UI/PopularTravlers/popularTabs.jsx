import { useState } from 'react';

const tabs = [
    'Shopping',
    'Gastronomic Tours',
    'Cultural Exploration',
    'Local Festivals',
    'Wildlife Observation',
];

export default function PopularTabs() {
    const [activeTab, setActiveTab] = useState('Shopping');

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
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:cursor-pointer'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </nav>
        </div>
    );
}
