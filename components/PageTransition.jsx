"use client";

import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return <main className="min-h-screen">{children}</main>;
};

export default PageTransition;
