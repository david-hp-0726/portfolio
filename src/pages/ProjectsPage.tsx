import React, { useRef, useEffect } from 'react';
import { PROJECTS, type Project } from '../content/projects';
import { ExternalLink } from 'lucide-react';

function cx(...classes: (string | false | undefined)[]) { return classes.filter(Boolean).join(' '); }
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={cx('max-w-6xl mx-auto px-6 md:px-10', className)}>{children}</div>;
}

function ProjectCard({ p }: { p: Project }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const auto = p.autoplay ?? true;
    const showControls = p.controls ?? false;

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3; // 👈 plays at 70% speed
        }
    }, []);

    return (
        <article className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900">
            {p.video ? (
                <video
                    ref={videoRef}
                    className="w-full aspect-video"
                    src={p.video}
                    preload="metadata"
                    autoPlay={auto}
                    loop={auto}
                    muted={auto}
                    playsInline
                    controls={showControls}
                />
            ) : p.image ? (
                <img className="w-full aspect-video object-cover" src={p.image} alt={p.name} />
            ) : null}
            <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    {p.repo && (
                        <a
                            href={p.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-sm hover:underline"
                        >
                            Code <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {p.description}
                </p>
            </div>
        </article>
    );
}

export default function ProjectsPage() {
    return (
        <div className="pt-14 pb-8 md:pt-20 md:pb-12">
            <Container>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.name} p={p} />
                    ))}
                </div>
            </Container>
        </div>
    );
}
