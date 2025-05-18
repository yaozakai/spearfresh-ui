import React from "react";

interface SubNavBarProps {
  title: string;
  links: Array<{ href: string; label: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }>;
}

const SubNavBar: React.FC<SubNavBarProps> = ({ title, links }) => (
  <nav className="fixed rounded-br-full top-[72px] w-full mx-auto z-20 bg-white dark:bg-[#1a2332] shadow-lg border-b border-gray-100 dark:border-[#222c2a] flex gap-8 px-8 py-2 text-base font-medium overflow-x-auto">
    <span>{title}</span>
    {links.map((link, ) => (
      <a
        key={link.href + link.label}
        href={link.href}
        className="hover:text-[#0c915e] dark:hover:text-[#42D49C]"
        onClick={link.onClick}
      >
        {link.label}
      </a>
    ))}
  </nav>
);

export default SubNavBar;
