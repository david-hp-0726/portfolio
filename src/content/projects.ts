export type Project = {
    name: string;
    description: string;
    image?: string; // thumbnail or animated gif
    video?: string; // short demo clip (mp4/webm)
    repo?: string; // optional GitHub link
    autoplay?: boolean; // default true for looping demo
    controls?: boolean; // default false (hide controls for looped demos)
    expandable?: boolean;   // renders as an expandable full-row card
    fullRow?: boolean;      // spans the entire grid row on md+
    detailImport?: () => Promise<{ default: React.ComponentType }>; // lazy loader
    href?: string;          // optional deep link (future-proof)
};


export const PROJECTS: Project[] = [
    {
        name: 'Autonomous Car Collision Predictor',
        description:
            'Implemented a collision probability predictor in a MuJoCo differential-drive env with randomized obstacles; collected 272k LiDAR+state samples; trained a 3‑layer PyTorch MLP (val≈0.0835, recall≈0.998, F1≈0.49).',
        image: '/images/cpp.gif',
        repo: 'https://github.com/david-hp-0726/lsac-cpp-replication',
    },
    {
        name: 'AI Chatbot for Medical Devices',
        description:
            'Led development of a medical chatbot with semantic caching using Sentence Transformers and FAISS to identify frequent queries and retrieve cached responses efficiently.',
        image: '/images/medview.gif',
        repo: 'https://github.com/david-hp-0726/MedViewAISystem-Frontend',
        autoplay: true,
        controls: false,
    },
    {
        name: "(Discovery Project) SO-101 Dual-Arm Teleoperation",
        description:
            "Leader–follower teleoperation + imitation learning.",
        image: "/images/teleop.gif",
        expandable: true,
        fullRow: true,
        detailImport: () => import("./walkthrough.tsx"),
        repo: "https://github.com/david-hp-0726/so101-bc"
    }
];


// Project 1 — MyCobot 280 Teaching & Development(ECE 4560, Georgia Tech)

// As a Course Assistant for ECE 4560 — Introduction to Robotics and Perception, I was responsible for building software and hardware tools that make the MyCobot 280 M5 robotic arm easier for students to use in laboratory environments.
// My work includes:

// API Development: Designed a Python interface for controlling the arm both in joint space and via end - effector pose.Implemented forward and inverse kinematics functions and integrated URDF - based 3D visualization.

//     Command - Line Tools: Built a CLI for manual “jogging” of the robot and a trajectory recording module that enables students to capture, replay, and manage motion sequences from the terminal.

// Hardware Design: Modeled and 3D - printed a custom adapter to mount a suction - cup gripper onto the robot flange for pick - and - place tasks.

//     Collaboration & Vision Integration: Worked with another student to develop a vision - based grasping pipeline, using a depth camera to localize objects and guide the arm in real - time.


// Project 2 — Dual - Arm Teleoperation and Imitation Learning

// This project focused on building and training a dual - arm teleoperation system for learning vision - based manipulation.I assembled two SO - 101 robotic arms—a leader and a follower—using 3D - printed components, servo motors, and a motor - control board.After assigning servo IDs and calibrating the joints with LeRobot tools, I set up a workspace featuring a Logitech C920 camera, a bowl, and an object for capture tasks.

// Using the leader arm for manual demonstrations, I recorded around 50 expert trajectories of placing the object into the bowl.These recordings were used to train a behavior - cloning model that predicted joint commands directly from camera images.

// While the trained policy partially learned useful patterns—such as returning to a “home” position once the object was placed and following motion cues like shadows—it failed to reliably execute the capture behavior, revealing important challenges in data quality, perception, and generalization.

// Problems
// 1. The model learned special correlations between motion and shadows, which is inevitable because shadows are high-Contrast, frequent, and correlate with activeAnimations.
// 2. A tilted, side-ish camera captures the z-coordinate but obscures/ambiguates the xy position of the robot, which is arguably more important.
// 3. On top of that, the model only takes camera images and doesn't have access to the joint position as input, so it lacks proprioception and struggle to localize itself.
// 4. Object capturing frames are underrepresented in the DataTransferItem. So it learns coarse phase cues like go to resting position once the object is in the bowl, but not precise control.