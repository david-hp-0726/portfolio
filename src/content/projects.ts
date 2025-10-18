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
        repo: 'https://github.com/david-hp-0726?tab=repositories',
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
        name: "SO-101 Dual-Arm Teleoperation",
        description:
            "Leader–follower teleoperation + imitation learning (10 demos, 5,557 datapoints).",
        image: "/images/teleop.gif",
        expandable: true,
        fullRow: true,
        detailImport: () => import("./walkthrough.tsx"),
        repo: "https://github.com/david-hp-0726/so101-bc"
    }
];