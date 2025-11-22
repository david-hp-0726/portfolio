// Updated ProjectsPage.tsx with video support removed and dropdown-only descriptions
import React, { useState, Suspense, lazy } from "react";
import { PROJECTS, type Project } from "../content/projects";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

function cx(...c: (string | false | undefined)[]) {
    return c.filter(Boolean).join(" ");
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cx("max-w-6xl mx-auto px-6 md:px-10", className)}>{children}</div>
    );
}

function ProjectCard({ p }: { p: Project }) {
    const [open, setOpen] = useState(false);
    const hasBullets = p.bullets && p.bullets.length > 0;

    return (
        <article className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900">
            {/* Image only */}
            {p.image && (
                <img className="w-full aspect-video object-cover" src={p.image} alt={p.name} />
            )}

            <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <div className="flex items-center gap-3">
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
                </div>

                {/* Resume-style bullets dropdown */}
                {hasBullets && (
                    <>
                        <button
                            onClick={() => setOpen((v) => !v)}
                            className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium border hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            {open ? (
                                <>
                                    Hide highlights <ChevronUp className="ml-1 h-4 w-4" />
                                </>
                            ) : (
                                <>
                                    Show highlights <ChevronDown className="ml-1 h-4 w-4" />
                                </>
                            )}
                        </button>

                        <div
                            className={cx(
                                "transition-[grid-template-rows] duration-300 ease-in-out grid",
                                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            )}
                        >
                            <div className="overflow-hidden">
                                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {p.bullets!.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </article>
    );
}

function ExpandableProjectCard({ p }: { p: Project }) {
    const [open, setOpen] = useState(false);
    const Detail = p.detailImport ? lazy(p.detailImport) : null;

    return (
        <article
            className={cx(
                "rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900",
                open && "md:col-span-2"
            )}
        >
            {/* Image only */}
            {p.image && (
                <img className="w-full aspect-video object-contain" src={p.image} alt={p.name} />
            )}

            <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <div className="flex items-center gap-3">
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
                </div>

                {/* Walkthrough dropdown */}
                <button
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium border hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                    {open ? (
                        <>
                            Hide details <ChevronUp className="ml-1 h-4 w-4" />
                        </>
                    ) : (
                        <>
                            Read walkthrough <ChevronDown className="ml-1 h-4 w-4" />
                        </>
                    )}
                </button>
            </div>

            <div
                className={cx(
                    "transition-[grid-template-rows] duration-300 ease-in-out grid",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
            >
                <div className="overflow-hidden px-5 pb-6">
                    {Detail && (
                        <Suspense fallback={<div className="text-sm text-gray-500">Loading…</div>}>
                            <Detail />
                        </Suspense>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function ProjectsPage() {
    return (
        <div className="pt-14 pb-8 md:pt-20 md:pb-12">
            <Container>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Projects</h1>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {PROJECTS.map((p) =>
                        p.expandable ? (
                            <ExpandableProjectCard key={p.name} p={p} />
                        ) : (
                            <ProjectCard key={p.name} p={p} />
                        )
                    )}
                </div>
            </Container>
        </div>
    );
}