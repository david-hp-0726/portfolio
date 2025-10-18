export default function SO101TeleopWalkthrough() {
    return (
        <section className="prose dark:prose-invert max-w-3xl mx-auto py-16">
            <div className="prose dark:prose-invert max-w-none space-y-4">
                <h2 className="text-2xl font-semibold mb-4">
                    SO-101 Dual-Arm Teleoperation Walkthrough
                </h2>

                <p>
                    This project explores how humans can teach robots through direct
                    demonstration. I built a <strong>dual-arm teleoperation setup</strong>
                    —one arm acts as the <em>leader</em> controlled by a human operator and the other as the
                    the <em>follower</em> (robot being taught). Using this system, I collected
                    motion data and trained a neural network to use images to predict robot joint motions.
                </p>

                <h3 className="mt-10 text-xl font-semibold">1. Assembly & Servos Setup</h3>
                <p>
                    Both arms were purchased as kits that included pre-printed structural
                    parts, servo motors, and control boards. The white arm serves as the <strong>follower</strong>, while the black arm is
                    the <strong>leader</strong>. In this setup, the leader arm captures the human operator's movements, and the
                    the follower arm replicates those motions in real-time.
                </p>

                <p>
                    Each servo was assigned a unique ID and calibrated using the LeRobot utilities. The servo motors are then wired in a serial chain.
                    The first servo in each chain plugs directly into the motor control board, which handles power distribution
                    and serial communication for the entire arm. The control boards of both the leader and follower arms are then
                    connected to the computer via USB.
                </p>

                <div className="flex gap-4 justify-center">
                    <img
                        src="/images/follower_done.jpg"
                        alt="Follower arm"
                        className="w-1/4 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                    <img
                        src="/images/leader_done.jpg"
                        alt="Leader arm"
                        className="w-1/4 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                </div>



                <h3 className="mt-10 text-xl font-semibold">2. Teleoperation </h3>
                <p>
                    During operation, the leader’s joint angles were streamed live to the follower
                    so that any motion of the leader was mirrored by the follower. After
                    calibration, I could pick up small objects and drop them into a bowl
                    entirely through teleoperation.
                </p>
                <div className="w-full flex justify-center">
                    <img
                        src="/images/teleop.gif"
                        className="w-1/4 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                </div>

                <h3 className="mt-10 text-xl font-semibold">3. Recording Demonstrations</h3>
                <p>
                    Using a Python script, I recorded 10 expert trajectories totaling{" "}
                    <strong>5,557 datapoints</strong>. Each episode logs
                    synchronized <em>images</em>, <em>joint positions</em>, and <em>actions</em> at 30 Hz.
                    These recordings formed the dataset for imitation learning.
                </p>

                <h3 className="mt-10 text-xl font-semibold">4. Training the Behavioral Cloning Agent</h3>
                <p>
                    The dataset recorded during teleoperation contained synchronized{" "}
                    <strong>camera images of the task space</strong>, <strong>leader actions</strong> (the commanded joint
                    positions), and <strong>follower feedback</strong> (measured joint positions). Each
                    entry represented one moment of interaction—what the operator saw, what command
                    they sent, and how the robot responded. During training, the BC model used the
                    images as input and learned to predict the leader’s joint commands as targets.
                </p>

                <p>
                    The model was trained for 20 epochs with a 90 / 10 train–validation split. It
                    reached a final <strong>train MSE of 0.03</strong> and <strong>validation MSE of
                        0.02</strong>. With only 10 demonstration episodes (about 5,500 datapoints), the
                    dataset was too small for robust grasping behavior, but the network still picked
                    up some meaningful correlations between vision and motion.
                </p>

                <p>
                    Interestingly, the model learned to detect and move toward <em>black objects</em> in
                    the scene—the same color as the training target. However, this also caused
                    false triggers: dark <em>shadows</em> occasionally prompted the arm to move as if
                    they were objects, showing how sensitive the learned policy is to lighting and
                    color biases.
                </p>

                <div className="flex justify-center">
                    <img
                        src="/images/arm0.gif"
                        className="w-1/2 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                </div>
            </div>
        </section>
    );
}
