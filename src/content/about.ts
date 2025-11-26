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
        "I’m a fourth-year student at Georgia Institute of Technology, working towards my second undergraduate degree in Computer Engineering. Prior to joining Georgia Tech, I completed a CS & Math degree at Emory University. I’m interested in how robot arms can learn to perceive and act through data-driven methods, especially using imitation and reinforcement learning to achieve vision-based manipulation in the real world.",
        "I started college with a passion for building interactive experiences on the internet - websites, tools, and servers that people could engage with through a screen. Over time, that passion expanded from the digital to the physical: I wanted to build systems that sense and act in the physical world. That led me to robotics, where computer programs turn into tangible motion. At Emory, I built a foundation in algorithms, machine learning, and optimization, and at Georgia Tech, I’ve applied those skills to hands-on robotics projects",
        "I currently support ECE 4560 Intro to Automation and Robotics as a Course Assistant, where I help develop Python interfaces for the MyCobot 280 manipulator. My contributions included creating a Python API with forward and inverse kinematics and URDF-based visualization, building command-line tools for robot control and trajectory recording, and designing a 3D-printed adapter to integrate a suction-cup gripper. I also collaborated on a vision-based grasping system that used a depth camera to localize objects and guide the arm in real time.",
        "I hope to build a career as a robotics machine learning engineer—someone who designs algorithms to allow robots to acquire useful skills. To get there, I plan to strengthen both my theoretical understanding and practical engineering skills. In the near term, that means deepening my knowledge of control theory, computer vision, and various robot learning paradigms and algorithms, while also learning how robots are actually deployed in the field. I want to build a strong foundation in embedded systems and low-level programming—especially C++—to better understand how perception and control algorithms run on real hardware. Alongside that, I’ll continue working on hands-on projects that connect learning-based methods to real robotic systems."
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
        degree: "B.S. in Computer Engineering",
        dates: "2025–present",
        relevantCoursework: [
            "CS 3630 - Introduction to Robotics and Perception",
            "ECE 2035 - Programming for Hardware/Software Systems",
            "ECE 3550 - Feedback Control Systems",
            "ECE 3600 - Computer Communications",
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
