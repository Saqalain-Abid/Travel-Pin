import React, { useState } from 'react';

const footerData = [
    {
        links: [
            { label: 'Islamabad', url: '/' },
            { label: 'Rawalpindi', url: '/' },
            { label: 'Swat', url: '/' },
            { label: 'Bhurban', url: '/' },
            { label: 'Muzaffarabad', url: '/' },
        ],
    },
    {
        links: [
            { label: 'Lahore', url: '/' },
            { label: 'Peshawar', url: '/' },
            { label: 'Gujranwala', url: '/' },
            { label: 'Abbottabad', url: '/' },
            { label: 'Hyderabad', url: '/' },
            { label: 'Extra City A', url: '/' },
            { label: 'Extra City B', url: '/' },
        ],
    },
    {
        links: [
            { label: 'Karachi', url: '/' },
            { label: 'Multan', url: '/' },
            { label: 'Naran', url: '/' },
            { label: 'Ayubia', url: '/' },
            { label: 'Hunza Valley', url: '/' },
        ],
    },
    {
        links: [
            { label: 'Murree', url: '/' },
            { label: 'Fiaslabad', url: '/' },
            { label: 'Skardu', url: '/' },
            { label: 'Bahria Town', url: '/' },
            { label: 'Gujrat', url: '/' },
        ],
    },
    {
        links: [
            { label: 'Nathia Gali', url: '/' },
            { label: 'Kalam', url: '/' },
            { label: 'Malam Jabba', url: '/' },
            { label: 'Bahawalpur', url: '/' },
            { label: 'Mansehra', url: '/' },
        ],
    },
];

const PopularTravelers = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAll = () => setIsExpanded((prev) => !prev);

    const maxVisibleLinks = 5;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 py-8 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {footerData.map((section, idx) => (
                    <div key={idx}>
                        <ul className="space-y-2 transition-all duration-300">
                            {(isExpanded ? section.links : section.links.slice(0, maxVisibleLinks)).map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.url}
                                        className="text-[0.8rem] hover:underline block"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {link.label} hotels
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <button
                    onClick={toggleAll}
                    className="text-blue-600 text-sm hover:underline focus:outline-none"
                >
                    {isExpanded ? 'See less' : 'See more'}
                </button>
            </div>
        </div>
    );
};

export default PopularTravelers;
