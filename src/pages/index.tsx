import NavMenu from "@/components/NavMenu";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { easings, textRevealMotion } from "@/utils/animations";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <section className="h-screen bg-black relative flex flex-col">
        <AnimatePresence>{menuOpen && <NavMenu />}</AnimatePresence>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <motion.div
          className="text-white uppercase tracking-wider px-8 flex-1 flex flex-col text-5xl leading-snug sm:text-6xl sm:leading-snug md:text-7xl md:leading-tight lg:text-[6.2rem] xl:text-[8rem]"
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="md:pl-[10%]" variants={textRevealMotion(0)}>
            We Design
          </motion.h1>
          <div className="flex items-center bg-black z-10">
            <motion.div
              className="bg-white h-1 flex-1 mr-8 hidden md:block origin-left"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: { duration: 0.8, ease: easings.easeInOutQuint },
              }}
            />
            <motion.h1 className="z-20" variants={textRevealMotion(0.2)}>
              World-Class
            </motion.h1>
          </div>
          <div className="bg-black z-20">
            <motion.h1 variants={textRevealMotion(0.4)}>
              Digital Products
            </motion.h1>
          </div>
          <div className="bg-black z-30 flex-1 text-[#ccbaa9] w-full pt-8 md:pl-[20%] text-base normal-case tracking-normal leading-normal">
            <motion.p
              className="max-w-lg"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.8,
                  ease: easings.easeOutQuart,
                },
              }}
            >
              Simple Studio® is a design studio focused on digital products that
              works with companies around the world, helping them grow and
              expand their business.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
