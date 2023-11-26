import React from "react";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import NavMenuToggle from "@/components/NavMenuToggle";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (_: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="grid grid-cols-3 items-center p-8 sticky top-0 mix-blend-difference z-[100]">
      <Logo className="w-[200px] h-[30px]" />
      <NavMenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Link
        href="/"
        className="justify-self-end text-[#ccbaa9] text-lg font-light tracking-wide underline underline-offset-8"
      >
        Get in touch
      </Link>
    </div>
  );
};

export default Navbar;
