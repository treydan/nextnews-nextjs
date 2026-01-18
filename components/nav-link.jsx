"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? "active" : undefined}
    >
      {children}
    </Link>
  );
};

export default NavLink;
