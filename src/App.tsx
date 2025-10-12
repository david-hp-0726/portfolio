import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link, NavLink as RRNavLink } from 'react-router-dom';
import { Home, User, FolderGit2, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { SITE } from './content/site';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

function cx(...classes: (string | false | undefined)[]) { return classes.filter(Boolean).join(' '); }
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={cx('max-w-6xl mx-auto px-6 md:px-10', className)}>{children}</div>;
}
function TopLink({ to, label, icon: Icon }: { to: string; label: string; icon: React.ComponentType<any> }) {
  return (
    <RRNavLink to={to} className={({ isActive }) => cx('inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-colors', isActive ? 'bg-white/10 text-white' : 'text-gray-200/90 hover:text-white hover:bg-white/5')}>
      <Icon className="w-4 h-4" /><span className="hidden sm:inline">{label}</span>
    </RRNavLink>
  );
}
function SocialButton({ href, label, icon: Icon }: { href: string; label: string; icon: React.ComponentType<any> }) {
  return (
    <a aria-label={label} href={href} target="_blank" rel="noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-800 transition-colors shadow-sm">
      <Icon className="w-5 h-5" /> <span className="font-medium text-sm">{label}</span>
    </a>
  );
}

function HomePage() {
  return (
    <main id="home" className="pt-14 pb-8 md:pt-20 md:pb-12 font-serif">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="lg:col-span-7">
            <p className="text-2xl md:text-3xl font-light">Hello.</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">I’m <span className="text-gray-900 dark:text-white">{SITE.name}</span></h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{SITE.role}</p>
            <p className="mt-5 max-w-prose text-gray-700 dark:text-gray-300 leading-relaxed">{SITE.intro}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.1 }} className="lg:col-span-5 flex items-center justify-center">
            <img src={SITE.headshot} alt={`${SITE.name} headshot`} className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover ring-8 ring-gray-200" />
          </motion.div>
        </div>
      </Container>

      {/* Contact teaser */}
      <section className="mt-16 md:mt-24">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Get in Touch</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">Whether you’d like to discuss research, collaboration, or new projects, feel free to reach out.</p>
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

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {/* NAVBAR */}
        <header className="sticky top-0 z-40 bg-gray-800 text-white">
          <Container className="h-14 flex items-center justify-between">
            <Link to="/" className="font-semibold tracking-wide">{SITE.name}</Link>
            <nav className="flex items-center gap-1 sm:gap-2">
              <TopLink to="/" label="Home" icon={Home} />
              <TopLink to="/about" label="About" icon={User} />
              <TopLink to="/projects" label="Projects" icon={FolderGit2} />
              {/* CV opens PDF */}
              <a href={SITE.links.cv || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-gray-200/90 hover:text-white hover:bg-white/5 transition-colors">
                <FileText className="w-4 h-4" /><span className="hidden sm:inline">CV</span>
              </a>
            </nav>
          </Container>
        </header>

        {/* ROUTES */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>

        {/* FOOTER (no extra top margin; sticks to bottom when content is short) */}
        <footer className="bg-gray-800 text-white">
          <Container className="py-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
              <p className="text-sm opacity-90">Developed by {SITE.name}</p>
              <p className="text-sm opacity-90">Copyright © {year}</p>
              <div className="flex items-center gap-4">
                {SITE.links.github && <a aria-label="GitHub" href={SITE.links.github} target="_blank" className="opacity-90 hover:opacity-100"> <Github className="w-5 h-5" /> </a>}
                {SITE.links.linkedin && <a aria-label="LinkedIn" href={SITE.links.linkedin} target="_blank" className="opacity-90 hover:opacity-100"> <Linkedin className="w-5 h-5" /> </a>}
                {SITE.email && <a aria-label="Email" href={SITE.email} className="opacity-90 hover:opacity-100"> <Mail className="w-5 h-5" /> </a>}
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}
