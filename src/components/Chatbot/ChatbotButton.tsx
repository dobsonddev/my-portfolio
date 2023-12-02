import React from 'react';

interface ChatbotProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

//continue
const ChatbotButton = ({ isOpen, setIsOpen }: ChatbotProps) => {

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

return (
    <div>
        <button onClick={toggleModal} className={`flex flex-row fixed bottom-3 right-3 p-2 rounded bg-custom-orange z-50 ${isOpen ? 'hidden' : ''}`}>
            Chat w/ MomoAI
            <img src="/lemur.svg" alt="Momo" className="ml-2" style={{ height: '25px', width:'...' }} />
        </button>
    </div>
)
}

export default ChatbotButton;