export type LinkMap = {
    github?: string;
    linkedin?: string;
    cv?: string;
    email?: string; // mailto: URL
};


export type SiteContent = {
    name: string;
    role: string;
    intro: string;
    email: string; // mailto: URL
    links: LinkMap;
    headshot: string; // path or URL
};


export const SITE: SiteContent = {
    name: 'David Chen',
    role: 'Computer Engineering Major at Georgia Tech',
    intro:
        "I am broadly interested in robot learning—particularly reinforcement learning and its applications to robotic manipulators. I also explore imitation learning and related approaches. I am currently a Course Assistant for ECE 4560: Intro to Automation and Robotics, helping to build robot infrastructure for the myCobot 280 manipulator, including Python and ROS 2 control interfaces.",
    email: 'mailto:xchen3019@gatech.edu',
    links: {
        github: 'https://github.com/david-hp-0726',
        linkedin: 'https://www.linkedin.com/in/david-chen-69a226284/',
        cv: '/cv/David_Chen_CV.pdf',
    },
    headshot: '/images/headshot.jpg',
};