import React from 'react';

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a href={href} className="text-gray-300 hover:text-white">
    {icon}
  </a>
);

export default SocialIcon;
