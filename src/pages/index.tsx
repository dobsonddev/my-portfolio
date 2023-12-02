import React, { Suspense, lazy, useState } from 'react';
import Home from '@/components/Home/Home';
import Experiences from "@/components/Experience/Experiences";
import ChatbotButton from "@/components/Chatbot/ChatbotButton";
import ChatbotModal from "@/components/Chatbot/ChatbotModal";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";

const Resume = lazy(() => import('../components/Resume/Resume'));
const Blog = lazy(() => import('../components/Blog/Blog'));
const Contact = lazy(() => import('../components/Contact/Contact'));

const IndexPage = () => {
    const [isChatModalOpen, setIsChatModalOpen] = useState(false);

    const toggleChatModal = () => {
        setIsChatModalOpen(!isChatModalOpen);
    };

    return (
        <div className="text-light">
            <Head>
                <title>Dobson Dunavant - Full-Stack Software Engineer, Personal Portfolio Website</title>
                <meta name="description" content="Showcasing experiences and skillsets in software engineering." />
                <meta name="keywords" content="Software Engineer, Frontend, Backend, DevOps, Cloud, Developer, React, AWS, Python, Full-Stack" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#52796f" />
                <meta name="author" content="Dobson Dunavant" />
                <link rel="canonical" href="https://dobsond.dev/" />
                <link rel="preload" href="https://dobsond.dev/DDlogo.png" as="image" />

                {/* Open Graph / Facebook */}
                <meta property="og:title" content="Dobson Dunavant - Personal Portfolio" />
                <meta property="og:description" content="Showcasing software engineering experiences and skills." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dobsond.dev/" />
                <meta property="og:image" content="https://dobsond.dev/DDlogo.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dobson Dunavant - Personal Portfolio" />
                <meta name="twitter:description" content="Showcasing software engineering experiences and skills." />
                <meta name="twitter:image" content="https://dobsond.dev/DDlogo.png" />
            </Head>

            <Navbar toggleChatModal={toggleChatModal} />
            <div className="flex flex-col items-center">
                <ChatbotButton isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />
                <ChatbotModal isOpen={isChatModalOpen} setIsOpen={setIsChatModalOpen} />

                <section id="home" className="w-full"><Home /></section>
                <section id="experiences" className="w-full"><Experiences /></section>

                <Suspense fallback={<div>Loading...</div>}>
                    <section id="resume" className="w-full"><Resume /></section>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <section id="blog" className="w-full"><Blog /></section>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <section id="contact" className="w-full bg-middark"><Contact /></section>
                </Suspense>

                {/* Uncomment this section if you want to display the projects section */}
                {/* <section id="projects" className="w-full"><Projects /></section> */}
            </div>
        </div>
    );
};

export default IndexPage;
