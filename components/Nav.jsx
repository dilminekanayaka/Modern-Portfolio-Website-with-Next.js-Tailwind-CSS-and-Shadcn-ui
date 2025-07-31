"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = ({ isMobile = false }) => {
  const pathname = usePathname();

  return (
    <nav className={`${isMobile ? "flex flex-col gap-4" : "flex gap-8"}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize hover:text-accent transition-all ${
            link.path === pathname 
              ? "text-accent border-b-2 border-accent pb-1" 
              : "text-white"
          } capitalize font-medium hover:text-accent transition-all ${
            isMobile ? "text-lg py-2" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
