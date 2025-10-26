export type LinkMap = {
    github?: string;
    linkedin?: string;
    cv?: string;
    email?: string; // mailto: URL
};

export type Thread = {
    name: string;
    href: string;
};


export type SiteContent = {
    name: string;
    role: string;
    intro: string;
    email: string; // mailto: URL
    links: LinkMap;
    headshot: string; // path or URL
    threads: Thread[];
};


export const SITE: SiteContent = {
    name: 'David Chen',
    role: 'Computer Engineering Student at Georgia Tech',
    intro:
        `I am passionate about robotics - especially the challenge of allowing robots to perceive, reason, and act directly from sensory input. 
            My research interest is in exploring how imitation learning and reinforcement learning can be used to teach robot arms visuomotor skills, allowing them to learn manipulation behaviors through experience.`,
    email: 'mailto:xchen3019@gatech.edu',
    links: {
        github: 'https://github.com/david-hp-0726',
        linkedin: 'https://www.linkedin.com/in/david-chen-69a226284/',
        cv: '/cv/David_Chen_CV.pdf',
    },
    headshot: '/images/headshot.jpg',
    threads: [
        {
            name: "Distributed System & Software Design Thread",
            href: "https://ece.gatech.edu/distributed-system-software-design",
        },
        {
            name: "Robotics Autonomous Systems",
            href: "https://ece.gatech.edu/robotics-autonomous-systems-thread",
        },
    ],
};