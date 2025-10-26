// src/pages/CVPage.tsx
import React from 'react';
import { FileDown, ExternalLink } from 'lucide-react';
import { SITE } from '../content/site';

function cx(...classes: (string | false | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={cx('max-w-6xl mx-auto px-6 md:px-10', className)}>{children}</div>;
}

export default function CVPage() {
    const cvUrl = SITE.links.cv || '';

    return (
        <main className="pt-10 pb-16">
            <Container>
                <header className="flex items-center justify-between gap-4">
                    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Resume</h1>
                    <div className="flex items-center gap-2">
                        <a
                            href={cvUrl}
                            download
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800 transition-colors shadow-sm"
                        >
                            <FileDown className="w-4 h-4" />
                            <span className="text-sm font-medium">Download PDF</span>
                        </a>
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800 transition-colors shadow-sm"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Open in new tab</span>
                        </a>
                    </div>
                </header>

                {/* Viewer */}
                <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
                    {/* Use <object> for broad compatibility; falls back to a link if blocked */}
                    <object
                        data={cvUrl}
                        type="application/pdf"
                        className="w-full h-[80vh]"
                    >
                        <div className="p-6 text-sm text-gray-700 dark:text-gray-300">
                            <p>It looks like your browser blocked the embedded PDF.</p>
                            <p className="mt-2">
                                You can{' '}
                                <a className="underline" href={cvUrl} target="_blank" rel="noreferrer">
                                    open it in a new tab
                                </a>{' '}
                                or use the Download button above.
                            </p>
                        </div>
                    </object>
                </div>
            </Container>
        </main>
    );
}
