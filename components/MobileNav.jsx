"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetClose } from "@/components/ui/sheet";
import { IoMdClose } from "react-icons/io";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="relative bg-primary flex flex-col h-full">
      {/* Close button */}
      <SheetClose className="absolute right-5 top-5 p-0 m-0 text-accent hover:bg-transparent focus:outline-none">
        <IoMdClose className="h-6 w-6 text-accent" />
      </SheetClose>
      {/* Logo */}
      <div className="pt-16 pb-12 flex justify-center">
        <h1 className="text-4xl font-semibold font-mono select-none text-white">
          Luke <span className="text-accent">.</span>
        </h1>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col items-center gap-7 flex-1 justify-center">
        {links.map((link, index) => (
          <SheetClose key={index} asChild>
            <Link
              href={link.path}
              className={`text-lg font-mono font-medium transition-all capitalize px-2 ${
                pathname === link.path
                  ? "text-accent border-b-2 border-accent pb-1"
                  : "text-white hover:text-accent"
              }`}
              tabIndex={0}
            >
              {link.name}
            </Link>
          </SheetClose>
        ))}
      </nav>
    </div>
  );
};

export default MobileNav;
