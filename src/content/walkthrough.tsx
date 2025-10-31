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

                <div className="w-full flex justify-center">
                    <img
                        src="/images/assembly.png"
                        className="w-full rounded-lg object-contain border border-gray-200 dark:border-gray-700"
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
                        className="w-1/2 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                </div>

                <h3 className="mt-10 text-xl font-semibold">3. Demonstrations & Model Training (1st Attempt)</h3>
                <p>
                    Using a Python script, I recorded myself doing 10 demonstrations of picking up a black phone holder (an arbitrary object choice). This amounts to 10 expert trajectories totaling{" "}
                    <strong>5,557 datapoints</strong>. Each datapoint consists of a camera image and a 6-D vector of joint positions.
                    These recordings formed the dataset for imitation learning.
                </p>

                <p>
                    A simple CNN was trained to predict joint commands from camera images for 20 epochs with a 90 / 10 train–validation split. It
                    reached a final <strong>train MSE of 0.03</strong> and <strong>validation MSE of
                        0.02</strong>.
                </p>

                <h3 className="mt-10 text-xl font-semibold">4.  Learning Outcomes (1st Attempt)</h3>
                <p>
                    With only 10 demonstrations (about 5,500 datapoints), the
                    dataset was too small to produce any grasping behavior. However, the
                    network still captured two clear correlations between vision and motion:
                </p>
                <ol className="list-inside mt-2 space-y-1">
                    <li><strong>(1)</strong>it learned to detect and move toward black objects in the scene—the same color as the training target; and</li>
                    <li><strong>(2)</strong>it occasionally reacted to dark shadows as if they were objects, suggesting that it has picked up spurious correlation between motion and shadow.</li>
                </ol>
                <div className="flex justify-center">
                    <img
                        src="/images/arm0.gif"
                        className="w-1/2 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                </div>

                <h3 className="mt-10 text-xl font-semibold">5. Demonstrations & Model Training (2nd Attempt)</h3>
                <p className="mt-2">
                    To improve on the first iteration, I made several key changes to the training process:
                </p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                    <li>
                        Recorded <strong>50 demonstrations</strong> at 10&nbsp;Hz (compared to 30&nbsp;Hz before), collecting a more diverse set of about 9,600 datapoints.
                    </li>
                    <li>
                        Switched to a <strong>pink cube</strong> target to improve color contrast and avoid confusion with shadows.
                    </li>
                    <li>
                        Maintained <strong>consistent lighting conditions</strong> between demonstrations and testing.
                    </li>
                    <li>
                        Replaced the simple CNN with a ResNet-18. After 20 epoches and with a 90/10 train-test split, the model achieved a <strong>train MSE of 0.027</strong> and <strong>validation MSE of
                            0.040</strong>.
                    </li>
                </ol>

                <div className="w-full flex justify-center">
                    <img
                        src="/images/demo.gif"
                        className="w-1/2 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                </div>

                <h3 className="mt-10 text-xl font-semibold">6. Learning Outcomes (2nd Attempt)</h3>
                Still, the model failed to acquire the ability to capture objects. However, it does learn to associate interesting actions with different environmental cues:
                <ol className="list-inside mt-2 space-y-1">
                    <li>
                        <strong>(1)</strong> Learned to <strong>hover above pink objects</strong> in the scene, showing it could localize the target based on color.
                    </li>
                    <li>
                        <strong>(2)</strong> There is a strong tendency to <strong>follow shadows</strong>, likely because shadows were highly prominent in the training data.
                    </li>
                    <li>
                        <strong>(3)</strong> Return to a <strong>home position</strong> whenever the pink cube was detected inside the bowl.
                    </li>
                </ol>
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-2xl aspect-video">
                        <iframe
                            src="https://www.youtube.com/embed/nnYnia2P2IU"
                            title="LeRobot SO-101 Learning Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg border border-gray-200 dark:border-gray-700"
                        />
                    </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold">7. Reflection & Future Work</h3>
                Despite picking up interesting behaviors, the robot was unable to learn the intended skill of capturing objects. Several factors in the training setup likely contributed to this outcome:
                <ol className=" list-inside mt-2 space-y-1">
                    <li>
                        <strong>(1)</strong> T training images contained a strong presence of <strong>shadows</strong>, and the model likely learned to associate dark regions with motion. This could have been entirely avoided by masking the workspace with a black cloth.
                    </li>
                    <li>
                        <strong>(2)</strong> The camera was placed at a <strong>tilted, side-looking angle</strong>, rather than directly overhead. This makes it difficult to encode the (x,y) coordinates of the arm despite a clearer representation of z coordinates. Arguably, (x,y) coordinates are more informative of the arm's motion.
                    </li>
                    <li>
                        <strong>(3)</strong> The model's prediction is based solely on camera images. The prediction input could have been augmented with previous joint positions to allow the robot to better localize itself.
                    </li>
                    <li>
                        <strong>(4)</strong> Out of all training images, a small percentage are object-capturing frames, which limits the robot's ability to learn precise grasping behavior.
                    </li>
                </ol>

            </div>
        </section >
    );
}
