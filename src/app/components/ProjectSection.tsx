import React from 'react';
import ProjectCard from './ProjectCard'; // ProjectCard 컴포넌트 import

// 프로젝트 데이터
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Description of the e-commerce platform project.',
    techStack: 'React, Node.js, MongoDB',
    role: 'Full-stack developer',
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/ecommerce',
    status: 'completed', // 완료된 프로젝트
  },
  {
    title: 'Task Management App',
    description: 'Description of the task management app project.',
    techStack: 'React, Firebase',
    role: 'Front-end developer',
    liveDemo: 'https://example.com',
    github: 'https://github.com/example/taskapp',
    status: 'in-progress', // 진행 중인 프로젝트
  },
  // 다른 프로젝트 추가...
];

const ProjectSection = () => {
  // 완료된 프로젝트와 진행 중인 프로젝트로 나누기
  const completedProjects = projects.filter((project) => project.status === 'completed');
  const inProgressProjects = projects.filter((project) => project.status === 'in-progress');

  return (
    <div>
      {/* 완료된 프로젝트 섹션 */}
      <h2 className="text-3xl font-semibold mb-6">Completed Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {completedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* 진행 중인 프로젝트 섹션 */}
      <h2 className="text-3xl font-semibold mb-6 mt-12">Projects in Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inProgressProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
