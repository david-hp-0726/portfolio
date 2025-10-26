// src/App.tsx
import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink as RRNavLink } from 'react-router-dom';
import { Home, User, FolderGit2, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { SITE } from './content/site';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';
import CVPage from './pages/CVPage';

function cx(...classes: (string | false | undefined)[]) { return classes.filter(Boolean).join(' '); }
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={cx('max-w-6xl mx-auto px-6 md:px-10', className)}>{children}</div>;
}
function TopLink({ to, label, icon: Icon }: { to: string; label: string; icon: React.ComponentType<any> }) {
  return (
    <RRNavLink
      to={to}
      className={({ isActive }) =>
        cx(
          'inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-colors',
          isActive ? 'bg-white/10 text-white' : 'text-gray-200/90 hover:text-white hover:bg-white/5'
        )
      }
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </RRNavLink>
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
              {/* ✅ CV now a route, not a direct PDF link */}
              <TopLink to="/cv" label="CV" icon={FileText} />
            </nav>
          </Container>
        </header>

        {/* ROUTES */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </main>

        {/* FOOTER */}
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
