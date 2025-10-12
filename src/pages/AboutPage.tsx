import React from 'react';
import { ABOUT, SKILLS, EDUCATION } from '../content/about';


function cx(...classes: (string | false | undefined)[]) { return classes.filter(Boolean).join(' '); }
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={cx('max-w-6xl mx-auto px-6 md:px-10', className)}>{children}</div>;
}


export default function AboutPage() {
    return (
        <div className="pt-14 pb-8 md:pt-20 md:pb-12">
            <Container>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h1>


                {/* Education */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold tracking-tight">Education</h2>
                    <ul className="mt-4 space-y-4">
                        {EDUCATION.map((e) => (
                            <li key={e.school} className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                    <div>
                                        <p className="text-base font-semibold">{e.school}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{e.degree}{e.program ? ' • ' + e.program : ''}</p>
                                    </div>
                                    {e.dates && <p className="text-sm text-gray-500">{e.dates}</p>}
                                </div>
                                {e.details && (
                                    <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                        {e.details.map((d, i) => (
                                            <li key={i}>{d}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>


                {/* Skills */}
                <section className="mt-10">
                    <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
                    <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
                        {SKILLS.map((s) => (
                            <li key={s.name} className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800">{s.name}</li>
                        ))}
                    </ul>
                </section>
            </Container>
        </div>
    );
}