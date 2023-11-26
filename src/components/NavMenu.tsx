import { motion } from "framer-motion";
import React from "react";

import { easings } from "@/utils/animations";
import NavMenuItem from "./NavMenuItem";

const NavMenu = () => {
  const navItems = [
    "Services",
    "Our Work",
    "People & Culture",
    "Clients & Partners",
    "Get In Touch",
  ];

  return (
    <motion.nav
      className="absolute h-screen w-screen bg-[#eee9e4] flex flex-col justify-end p-8 z-50"
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
        transition: { duration: 1, ease: easings.easeOutQuart },
      }}
      exit={{ y: "-100%", transition: { duration: 0.3 } }}
    >
      <motion.ul exit={{ opacity: 0, transition: { duration: 0 } }}>
        {navItems.map((item, idx) => (
          <NavMenuItem key={idx} index={idx + 1} title={item} />
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default NavMenu;
