export type AboutSection = {
    heading: string;
    body: string[]; // paragraphs
};


export type Skill = {
    category: string;
    items: string[];
};


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
        "I’m a computer engineering undergraduate at Georgia Tech interested in robotic manipulation and robot learning.",
        "My research explores how vision-language and other foundation models can be leveraged to facilitate manipulation-task planning. I’m also interested in using reinforcement learning and imitation learning to train generalized control policies.",
    ],
};


export const SKILLS: Skill[] = [
    {
        category: 'Programming Languages',
        items: ['Python', 'C++', 'C', 'MATLAB', 'Java', 'JavaScript/TypeScript', 'SQL'],
    },
    {
        category: 'Robotics & Motion Planning',
        items: ['ROS 2', 'MuJoCo', 'Drake', 'OMPL', 'MoveIt', 'LeRobot', 'URDF'],
    },
    {
        category: 'Hardware & Prototyping',
        items: ['KUKA LBR iiwa 7 R800', 'AgileX PiPER', 'LeRobot SO-101', 'MyCobot-280', 'SCHUNK EGK-40', 'Intel RealSense D415', 'Orbbec-336L', 'camera calibration', '3D printing', 'circuit soldering'],
    },
    {
        category: 'Machine Learning, Perception & 3D Geometry',
        items: ['PyTorch', 'OpenCV', 'Open3D', 'NumPy', 'SciPy', 'VGGT', 'SAM2', 'GroundingDINO', 'FoundationPose', 'AnyGrasp', 'Trimesh', 'Hunyuan3D'],
    },
    {
        category: 'Software Engineering',
        items: ['Linux', 'Git', 'React', 'MySQL', 'MongoDB', 'AWS', 'Google Cloud'],
    },
];


export const EDUCATION = [
    {
        school: "Georgia Institute of Technology",
        degree: "B.S. in Computer Engineering",
        dates: "2025–present",
        gpa: "4.0 / 4.0",
        relevantCoursework: [
            "CS 4803 - Advanced Robotic Manipulation",
            "ECE 4560 - Introduction to Automation and Robotics",
            "ECE 4550 - Control System Design",
            "CS 3630 - Introduction to Robotics and Perception",
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
