// ExperienceData.ts

export interface Experience {
    title: string;
    date: string;
    company: string;
    location: string;
    details: string[];
    logo: string;
}

const experiences: Experience[] = [
    {
        title: "Robotics/Machine Learning Co-Op",
        date: "Sep 2023 - Current",
        company: "Mercedes-Benz x College of Charleston",
        location: "Ladson, SC",
        details: [
            "Developing a large-scale, autonomous inventory system using a multi-layered machine learning system, robotics, and AWS cloud services.",
            "Leading a team of 4 students under 2 professors, in direct collaboration with Mercedes-Benz Vans stakeholders.",
            "Initial prototype displayed significant improvement of efficiency, accuracy and real-time awareness of high-importance inventory."
        ],
        logo: '/mblogo.png'
    },
    {
        title: "Software Engineering Intern",
        date: "May 2023 - Aug 2023",
        company: "Savvas Learning Company (EdTech)",
        location: "Phoenix, AZ",
        details: [
            "Developed full-stack solutions for an industry-leading K-12 edtech platform using Angular 16 MFEs, Apollo, GraphQL, Spring, PostgreSQL, StencilJS, and Storybook in an Agile environment.",
            "Resolved 14 Jira tickets across 12 sprints, as a member of an agile team.",
            "Self-started a full knowledgebase development, resulting in an all-in-on confluence knowledge hub for both new hires and experienced devs to reference."
        ],
        logo: '/savvaslogo.png'
    },
    {
        title: "Data Engineering Intern",
        date: "Sep 2022 - Jan 2023",
        company: "Fiscal Spreading & Tracking (FinTech)",
        location: "Charleston, SC",
        details: [
            "Assisted in transition from a monolithic desktop app to a microserviced, serverless webapp, leveraging React, Django, and AWS.",
            "Performed API reworks, assessing existing API call performance while implementing query and data handling optimizations to reduce server-load and user wait times.",
            "Containerized various data flows to separate concerns and minimize/mitigate single point of failure situations using Docker."
        ],
        logo: '/fiscallogo.png'
    },
    {
        title: "Data Analyst / Scrum Master",
        date: "March 2018 - March 2021",
        company: "Ceterus (FinTech startup)",
        location: "Charleston, SC",
        details: [
            "Developed and analyzed financial data sets for a fintech app that enhances small-business' financial insights.",
            "Met with small-business owners on a weekly basis to discuss financial performance and provide recommendations for improvement.",
            "Led a Scrum team, achieving significant reductions in project lead time and increases in story point velocity."
        ],
        logo: '/ceteruslogo.png'
    }
];

export default experiences;
