export type Project = {
    name: string;
    repo?: string;
    video?: string;
    image?: string;
    expandable?: boolean;
    detailImport?: () => Promise<{ default: React.ComponentType }>;
    bullets?: string[];
    youtube?: string;
};



export const PROJECTS: Project[] = [
    {
        name: "Robotics Infrastructure Developer, IVALab",
        image: "/images/click_to_capture.gif",
        bullets: [
            "Worked under the guidance of Dr. Patricio Vela to build a full Python package for the MyCobot280 Arm, including functions for kinematics, gripper control, trajectory recording, and coordinate frame management (3 modules, 50 + functions).",
            "Collaborated on ArUco-based camera calibration and implemented “click-to-capture” vision-guided picking pipeline.",
            "Customized the full hardware stack for a suction gripper, including a MOSFET - based pump / valve switching circuit, GPIO interfaces, and 3D - printed mechanical adapter for mounting onto the arm.",
            "Diagnosed and repaired two malfunctioning electric grippers—opened and serviced the hardware, coordinated with vendor technical support, and successfully secured two replacement servos at no cost."
        ],
        youtube: "https://www.youtube.com/embed/3nBySYKasM8"
    },
    {
        name: "End-to-End Robot Learning via Teleoperation",
        image: "/images/teleop.gif",
        expandable: true,
        detailImport: () => import("./walkthrough.tsx"),
        repo: "https://github.com/david-hp-0726/so101-bc"
    },
    {
        name: "Robojackets Software Training Project (ROS2/C++)",
        image: "/images/robojackets.gif",
        repo: "https://github.com/david-hp-0726/robojackets-ros2",
        bullets: [
            "Implemented camera-based obstacle detection using HSV filtering to generate top-down occupancy grids.",
            "Built key components of a SLAM pipeline: implemented odometry sensor model and particle-filter logic for localization, and a mapping node that uses TF transforms to fuse obstacle detections into a global occupancy grid.",
            "Developed a hill-climbing optimization module that samples terrain via a ROS service and steer towards maximum-elevation goal points."
        ]
    },
    {
        name: 'Autonomous Car Collision Predictor',
        bullets: [
            "Built a collision-prediction model using LiDAR and vehicle state data, trained on 272k labeled samples.",
            "Created a custom MuJoCo driving environment and automated data generation.",
            "Trained a PyTorch MLP with strong accuracy in predicting near-future collisions.",
        ],
        image: '/images/cpp.gif',
        repo: 'https://github.com/david-hp-0726/lsac-cpp-replication',
    },
    {
        name: "Drone Racing Path Planning (CS 3630 Final Project)",
        bullets: [
            "Implemented a full 3D RRT planner in SE(3), including random pose sampling and nearest-pose search in high-dimensional state space.",
            "Extended the planner with several steering strategies (vector-based, terminal-velocity inspired, rotation-limited) to improve the feasibility of motion.",
            "Built a multi-stage RRT pipeline to sequentially navigate through race-course hoops, including backtracking, pose correction, and 3D visualization of the resulting paths."
        ],
        image: "/images/cs3630.gif",
    },
    {
        name: 'AI Chatbot for Medical Devices',
        bullets: [
            "Led the development of a medical chatbot in collaboration with MedView to answer device-related questions.",
            "Developed a React + TypeScript frontend supporting both text and voice interaction using the Web Speech API.",
            "Built a FastAPI backend to query the DeepSeek API, with semantic caching using Sentence Transformers and FAISS for low-latency FAQ retrieval from a predefined MongoDB database."
        ],
        image: '/images/medview.gif',
        repo: 'https://github.com/david-hp-0726/MedViewAISystem-Frontend',
    }
];