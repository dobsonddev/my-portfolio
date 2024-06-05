import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { FaTree, FaSun, FaPalette } from 'react-icons/fa';
import { TbVectorTriangle, TbGridDots } from "react-icons/tb";

const ThemeSwitch = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        setModalOpen(false);
    };

    return (
        <div>
            <button
                className="rounded text-xs md:text-sm lg:text-base py-1 px-1 md:py-2 transition-all duration-500 transform hover:-translate-y-1 hover:animate-wiggle
                "
                onClick={() => setModalOpen(!modalOpen)}
            >
                <div className="flex items-center">
                    <FaPalette className="mr-2  h-4 w-4" />
                    {/* Conditional rendering based on screen size */}
                    <span className="hidden md:inline">Theme</span>
                </div>
            </button>
            {modalOpen && (
                <div className="absolute bg-white text-dark rounded shadow-lg ">
                    <button onClick={() => changeTheme('light')} className="flex items-center p-2 hover:bg-gray-100">
                        <FaSun />
                        <span className="hidden md:inline ml-2">Light</span> {/* Hide text on small screens */}
                    </button>
                    <button onClick={() => changeTheme('forest')} className="flex items-center p-2 w-full bg-green-300">
                        <FaTree />
                        <span className="hidden md:inline ml-2">Forest</span> {/* Hide text on small screens */}
                    </button>
                    <button onClick={() => changeTheme('vector')} className="flex items-center p-2 bg-purple-700 text-light">
                        <TbVectorTriangle />
                        <span className="hidden md:inline ml-2">Vector</span> {/* Hide text on small screens */}
                    </button>
                    <button onClick={() => changeTheme('dots')} className="flex items-center p-2 text-orange-500">
                        <TbGridDots />
                        <span className="hidden md:inline ml-2">Dots</span> {/* Hide text on small screens */}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThemeSwitch;
