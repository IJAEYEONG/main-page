import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from 'react-icons/fa';
import { SiGraphql, SiMongodb, SiTypescript } from 'react-icons/si'; // 추가된 아이콘들

const icons: Record<string, { icon: JSX.Element, color: string }> = {
  JavaScript: { icon: <FaJsSquare />, color: '#f7df1e' }, // 노란색
  React: { icon: <FaReact />, color: '#61DBFB' }, // 파란색
  'Node.js': { icon: <FaNodeJs />, color: '#3C873A' }, // 녹색
  Python: { icon: <FaPython />, color: '#3776AB' }, // 파란색
  AWS: { icon: <FaAws />, color: '#FF9900' }, // 주황색
  Docker: { icon: <FaDocker />, color: '#0db7ed' }, // 파란색
  GraphQL: { icon: <SiGraphql />, color: '#e535ab' }, // 핑크색
  MongoDB: { icon: <SiMongodb />, color: '#47A248' }, // 녹색
  TypeScript: { icon: <SiTypescript />, color: '#3178C6' }, // 파란색
};

const SkillBar = ({ skill }: { skill: string }) => {
  const skillData = icons[skill] || { icon: <FaReact />, color: '#61DBFB' }; // 기본 React 아이콘과 색상

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <div className="mr-4" style={{ color: skillData.color }}>
        {skillData.icon} {/* 아이콘에 색상 적용 */}
      </div>
      <div className="w-full">
        <h3 className="font-semibold mb-2">{skill}</h3>
      </div>
    </div>
  );
};

export default SkillBar;
