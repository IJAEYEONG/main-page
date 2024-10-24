"use client";
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import NavLink from './NavLink';
import SocialIcon from './SocialIcon';
import ProjectCard from './ProjectCard';
import SkillBar from './SkillBar';

const SidebarLayout = () => (
  <div className="bg-gray-100 text-gray-800 min-h-screen flex">
    <nav className="w-64 bg-gray-800 text-white p-6 fixed h-full overflow-auto">
      <h1 className="text-2xl font-bold mb-8">Test</h1>
      <ul className="space-y-4">
        {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
          <NavLink key={item} href={`#${item.toLowerCase()}`} label={item} />
        ))}
      </ul>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Connect</h2>
        <div className="flex space-x-4">
          <SocialIcon href="#" icon={<FaGithub />} />
          <SocialIcon href="#" icon={<FaLinkedin />} />
          <SocialIcon href="#" icon={<FaTwitter />} />
        </div>
      </div>
    </nav>
    <main className="flex-grow ml-64 p-8">
      <section id="about" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 mb-4">
          Test
        </p>
      </section>
      <section id="projects" className="mb-12">
  <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        title: 'E-commerce Platform',
        description: 'Test.',
        techStack: 'React, Node.js, MongoDB',
        role: 'Full-stack developer',
        liveDemo: 'https://example.com',
        github: 'https://github.com/example/ecommerce',
        status: 'completed'
      },
      {
        title: 'Task Management App',
        description: 'Test',
        techStack: 'React, Firebase',
        role: 'Front-end developer',
        liveDemo: 'https://example.com',
        github: 'https://github.com/example/taskapp',
        status: 'in-progress'
      }
    ].map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </div>
</section>

      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'MongoDB', 'TypeScript'].map((skill) => (
            <SkillBar key={skill} skill={skill} />
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default SidebarLayout;
