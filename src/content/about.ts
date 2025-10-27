export type AboutSection = {
    heading: string;
    body: string[]; // paragraphs
};


export type Skill = { name: string };


export type EducationItem = {
    school: string;
    degree: string;
    specialization?: string;
    dates?: string; // optional display string
    gpa?: string;
    details?: string[]; // bullets
};


export const ABOUT: AboutSection = {
    heading: 'About',
    body: [
        "I’m a fourth-year Computer Engineering Student at Georgia Tech. I’m interested in how robot arms can learn to perceive and act through data-driven methods, especially using imitation and reinforcement learning to achieve vision-based manipulation in the real world.",
        "I currently support ECE 4560 Intro to Automation and Robotics as a Course Assistant, where I help develop Python interfaces for the MyCobot 280 manipulator. My contributions included creating a Python API with forward and inverse kinematics and URDF-based visualization, building command-line tools for robot control and trajectory recording, and designing a 3D-printed adapter to integrate a suction-cup gripper. I also collaborated on a vision-based grasping system that used a depth camera to localize objects and guide the arm in real time.",
    ],
};


export const SKILLS: Skill[] = [
    { name: 'ROS 2' },
    { name: 'Python' },
    { name: 'C++' },
    { name: 'Java' },
    { name: 'PyTorch' },
    { name: 'OpenCV' },
    { name: 'Mujoco' },
    { name: 'PyBullet' },
    { name: 'Linux' },
    { name: 'Web Development' }
];


export const EDUCATION = [
    {
        school: "Georgia Institute of Technology",
        degree: "B.S. in Electrical and Computer Engineering",
        dates: "2025–present",
        relevantCoursework: [
            "ECE 3550 - Feedback Control Systems",
            "CS 3630 - Introduction to Robotics and Perception",
        ],
    },
    {
        school: "Emory University",
        degree: "B.S. in Computer Science and Mathematics",
        dates: "2022–2025",
        gpa: "4.0 / 4.0",
        relevantCoursework: [
            "CS 211 - Introduction to Artificial Intelligence",
            "CS 326 - Analysis of Algorithms",
            "CS 334 - Machine Learning",
            "CS 350 - Systems Programming",
            "MATH 346 — Linear Optimization",
        ],
    },
];
