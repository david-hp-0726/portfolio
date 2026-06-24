export default function SO101ImitationLearningWalkthrough2() {
    return (
        <section className="prose dark:prose-invert max-w-3xl mx-auto py-16">
            <div className="prose dark:prose-invert max-w-none space-y-4">
                <h2 className="text-2xl font-semibold mb-4">
                    Imitation Learning for Bottle Pick-and-Place
                </h2>

                <p>
                    This project is a 3rd attempt to train a IL policy to perform pick-and-place directly from observation images. A more challenging
                    scenario of picking up bottles is used. The improvements over the previous iteration include: (1) a much larger training dataset (2)
                    scene covered in black cloth to reduce the impact of shadow (the presence of which caused the policy to chase shadows rather than pick up objects previously) (3) a better camera angle giving a top-down view.
                </p>

                <h3 className="mt-10 text-xl font-semibold">1. Training Data Collection</h3>
                <p>
                    I collected <strong>100 teleoperated demonstrations</strong> of bottle pick-and-place,
                    totaling <strong>70,904 samples</strong>. Each sample stores the current camera image,
                    the current 6-D robot proprioceptive state, and the demonstrated future joint actions.
                    The placement of the container and the bottle are randomized. In the demos, bottles are captured 
                    by the cap when upright, or by the body when lying on their side. To introduce error-recovery 
                    behavior, I purposefully allowed demonstrations that involve multiple regrasps.
                </p>

                <div className="w-full flex justify-center">
                    <img
                        src="/images/teleop2.gif"
                        className="w-1/2 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                </div>

                <h3 className="mt-10 text-xl font-semibold">2. Model Architecture</h3>
                <p>
                    The policy is an <strong>ACT-lite action-chunking model</strong>. Its input is the current
                    RGB image plus the current 6-D proprioceptive state. Its output is a
                    <strong> 30-step future action chunk</strong>, where each action is a 6-D joint/gripper
                    command.
                </p>

                <p>
                    The image is encoded by a pretrained ResNet-18, the proprioceptive state is encoded by
                    a small MLP, and the two features are fused into a context token. A Transformer then
                    combines this context token with learned action-query tokens, and a final linear head
                    predicts the future action sequence.
                </p>

                <h3 className="mt-10 text-xl font-semibold">3. Training Procedure</h3>
                <p>
                    Training was run on Modal using GPU acceleration. I trained the policy for
                    <strong> 15 epochs</strong> with a <strong>batch size of 32</strong>. The training objective
                    was a normalized Smooth L1 imitation loss on the predicted future action chunk, plus a
                    small smoothness penalty between consecutive predicted actions.
                </p>

                <p>
                    After 15 epochs, the model reached a final reported training loss of
                    <strong> 0.011634</strong>. 
                </p>

                <h3 className="mt-10 text-xl font-semibold">4. Rollout Results</h3>
                <p>
                    The trained policy successfully performs bottle pick-and-place rollouts. The motion is
                    somewhat jerky, mainly because deployment currently clips large action changes for
                    safety and does not yet apply action smoothing.
                </p>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-2xl aspect-video">
                        <iframe
                            src="https://www.youtube.com/embed/7qJUABKTsPY"
                            title="SO-101 bottle pick-and-place rollout"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg border border-gray-200 dark:border-gray-700"
                        />
                    </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold">5. Error Recovery & Compositional Generalization</h3>
                <p>
                    Interestingly, the policy showed simple error recovery behavior. When a grasp failed, it will continuously reattempt the grasp, and when a bottle was dropped,
                    it sometimes returned to the bottle to pick it back up. Regrasping was present in the training data, but full drop-and-recover sequences were not explicitly demonstrated, 
                    suggesting that the policy learned to generalize to unseen scenarios by composing existing skills.
                </p>

                <div className="w-full flex justify-center">
                    <img
                        src="/images/error_recovery.gif"
                        className="w-1/2 rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                    />
                </div>
            </div>
        </section>
    );
}

