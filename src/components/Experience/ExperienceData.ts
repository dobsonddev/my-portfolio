// ExperienceData.ts

export interface Experience {
    title: string;
    date: string;
    company: string;
    location: string;
    details: string[];
    logo: string;
    technologies: string[];
}

const experiences: Experience[] = [
    {
        title: "Machine Learning & Cloud Engineering Co-Op",
        date: "Sep 2023 - May 2024",
        company: "Mercedes-Benz & IFA Group",
        location: "Ladson, SC",
        details: [
            "Led team of 4 to develop an autonomous drone inventory system using Tesseract OCR and YOLOv8 for real-time, small-part tracking in industrial settings to enable inventory awareness and supply-chain analytics",
        "Implemented onboard edge computing on Raspberry Pi drones, enabling autonomous inventory management with WebSocket connections to AWS and SAP",
        "Authored SRS and feasibility reports, clearly defining functional and non-functional requirements",
        "Achieved 98% inventory accuracy and SAP integration, delivering a fully end-to-end solution, significantly surpassing the existing accuracy and efficiency benchmarks"
    ],
        logo: '/mblogo.png',
        technologies: ['React', 'Flask', 'PostgreSQL', 'AWS', 'OpenCV'],
    },

    {
        title: "Software Engineering Intern",
        date: "May 2023 - Aug 2023",
        company: "Savvas Learning Company (EdTech)",
        location: "Phoenix, AZ",
        details: [
            "Developed full-stack solutions for Savvas Realize, an industry-leading K-12 ed-tech platform, using Angular 16 MFEs, Apollo, GraphQL, RxJS, Spring, PostgreSQL, and Jest",
            "Resolved 11 high-priority Jira tickets, contributing to sprint goals within an Agile team",
            "Built a comprehensive, all-in-one Confluence knowledge hub, covering content from day 1 new-dev onboarding guides to custom micro-frontend build steps, reducing redundant knowledge-sharing and improving dev autonomy/efficiency."
],
        logo: '/savvaslogo.png',
        technologies: ['Angular', 'GraphQL', 'Spring', 'PostgreSQL', 'Jest', 'StoryBook'],

    },
    {
        title: "Data Engineering Intern",
        date: "Sep 2022 - Jan 2023",
        company: "Fiscal Spreading & Tracking (FinTech)",
        location: "Charleston, SC",
        details: [
            "Transitioned from a monolithic desktop app to a serverless microservice web app using React, Django, PostgreSQL, and AWS services (Lambda, S3, RDS), enhancing system efficiency and scalability",
            "Reduced server load by 17% through optimizing and refactoring APIs, streamlining query logic, and data caching",
            "Containerized key data processing tasks with Docker, including ETL operations and credit scoring algorithms, to separate responsibilities and mitigate single-point failures, thereby increasing system reliability"
        ],
        logo: '/fiscallogo.png',
        technologies: ['React', 'Django', 'PostgreSQL', 'AWS', 'Docker'],

    },
    {
        title: "Sales Engineer & Scrum Master",
        date: "March 2018 - March 2021",
        company: "Ceterus (FinTech startup)",
        location: "Charleston, SC",
        details: [
            "Engineered technical solutions for over 125 clients by translating complex technical features into tangible business benefits, leading to increased sales and enhanced customer engagement",
            "Achieved a domain-high 23% year-over-year increase in customer retention by conducting regular feedback sessions and personalized follow-ups, leading to stronger client relationships and improved service satisfaction",
            "Achieved a 21% reduction in time blocked within six months by addressing common blockers while facilitating knowledge-sharing between interdependent teams for more efficient sprint planning and execution"
        ],
        logo: '/ceteruslogo.png',
        technologies: ['Jira', 'Excel', 'QuickBooks'],

    }
];

export default experiences;
