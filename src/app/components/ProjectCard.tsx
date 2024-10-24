import { useState } from "react";

// 프로젝트 데이터 타입 정의
interface Project {
    title: string;
    description: string;
    techStack: string;
    role: string;
    liveDemo: string;
    github: string;
    status: string;
  }
  
  const ProjectCard = ({ project }: { project: Project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    return (
      <>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <button onClick={openModal} className="text-blue-500 hover:underline">
            View Details
          </button>
        </div>
  
        {/* 모달 */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button className="absolute top-2 right-2 text-gray-600" onClick={closeModal}>
                X
              </button>
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul>
                <li><strong>Tech Stack:</strong> {project.techStack}</li>
                <li><strong>Role:</strong> {project.role}</li>
                <li><strong>Live Demo:</strong> <a href={project.liveDemo}>View Live</a></li>
                <li><strong>GitHub:</strong> <a href={project.github}>View Code</a></li>
              </ul>
              <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default ProjectCard;
  