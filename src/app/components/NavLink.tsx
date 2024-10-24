import React from 'react';

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a href={href} className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors">
      {label}
    </a>
  </li>
);

export default NavLink;
