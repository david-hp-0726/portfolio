export type AboutSection = {
    heading: string;
    body: string[]; // paragraphs
};


export type Skill = { name: string };


export type EducationItem = {
    school: string;
    degree: string;
    program?: string;
    location?: string;
    dates?: string; // optional display string
    details?: string[]; // bullets
};


export const ABOUT: AboutSection = {
    heading: 'About',
    body: [
        "I’m a fourth-year Computer Engineering Student at Georgia Tech. I’m interested in how robot arms can learn to perceive and act through data-driven methods, especially using imitation and reinforcement learning to achieve vision-based manipulation in the real world.",
        "I currently support ECE 4560 (Intro to Automation and Robotics) as a Course Assistant, where I help maintain infrastructure for the myCobot 280 platform: Python control libraries, ROS 2 integration, and lab tooling for dataset collection and evaluation.",
    ],
};


export const SKILLS: Skill[] = [
    { name: 'Robot Learning (IL/RL)' },
    { name: 'ROS 2' },
    { name: 'Python' },
    { name: 'C++' },
    { name: 'PyTorch' },
    { name: 'Computer Vision' },
    { name: 'Controls' },
];


export const EDUCATION: EducationItem[] = [
    {
        school: 'Georgia Institute of Technology',
        degree: 'B.S. in Computer Engineering',
        program: 'Dual Degree Engineering Program',
        details: [
            'Intended specializations: Robotics & Autonomous Systems; Distributed Systems & Software Design',
        ],
    },
    {
        school: 'Emory University',
        degree: 'B.S. in Computer Science & Mathematics',
        details: ['Completed as part of the dual degree pathway.'],
    },
];