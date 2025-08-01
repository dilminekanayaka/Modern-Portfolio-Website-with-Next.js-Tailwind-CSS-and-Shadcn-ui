"use client";

import { Github, Linkedin } from "lucide-react";

const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    {
      name: "GitHub",
      icon: Github,
      path: "https://github.com/dilminekanayaka",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      path: "https://www.linkedin.com/in/dilmin-ekanayaka",
    },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
            aria-label={social.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
