import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE } from '../content/site';

function cx(...classes: (string | false | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={cx('max-w-6xl mx-auto px-6 md:px-10', className)}>{children}</div>;
}

function SocialButton({ href, label, icon: Icon }: { href: string; label: string; icon: React.ComponentType<any> }) {
    return (
        <a
            aria-label={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800 transition-colors shadow-sm"
        >
            <Icon className="w-5 h-5" /> <span className="font-medium text-sm">{label}</span>
        </a>
    );
}

export default function HomePage() {
    return (
        <main id="home" className="pt-14 pb-8 md:pt-20 md:pb-12 font-serif">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="lg:col-span-7"
                    >
                        <p className="text-2xl md:text-3xl font-light">Hello.</p>
                        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
                            I’m <span className="text-gray-900 dark:text-white">{SITE.name}</span>
                        </h1>
                        <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            {SITE.role}
                            <>
                                , specializing in{' '}
                                {SITE.threads.map((t, i) => (
                                    <React.Fragment key={t.href}>
                                        <a
                                            className="underline"
                                            href={t.href}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {t.name}
                                        </a>
                                        {i < SITE.threads.length - 1 ? ' and ' : ''}
                                    </React.Fragment>
                                ))}
                                .
                            </>
                        </p>

                        <p className="mt-5 max-w-prose text-gray-700 dark:text-gray-300 leading-relaxed">{SITE.intro}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="lg:col-span-5 flex items-center justify-center"
                    >
                        <img
                            src={SITE.headshot}
                            alt={`${SITE.name} headshot`}
                            className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover ring-8 ring-gray-200"
                        />
                    </motion.div>
                </div>
            </Container>

            {/* Contact teaser */}
            <section className="mt-16 md:mt-24">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get in Touch</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
                            Whether you’d like to discuss research, collaboration, or new projects, feel free to reach out.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            {SITE.links.github && <SocialButton href={SITE.links.github} label="GitHub" icon={Github} />}
                            {SITE.links.linkedin && <SocialButton href={SITE.links.linkedin} label="LinkedIn" icon={Linkedin} />}
                            {SITE.email && <SocialButton href={SITE.email} label="Email" icon={Mail} />}
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}