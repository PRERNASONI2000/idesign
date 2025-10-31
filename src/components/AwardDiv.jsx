import React, {useRef} from "react";
import { motion } from "framer-motion";

const AwardDiv = () => {
  const awards = [
    { img: "/assets/img/aw1.png", alt: "award1", title: "India's Most Trusted Brand" },
    { img: "/assets/img/aw2.png", alt: "award2", title: "Best Interior Design Solutions Brand" },
    { img: "/assets/img/aw3.png", alt: "award3", title: "Innovative Start-up" },
    { img: "/assets/img/aw4.png", alt: "award3", title: "World's Most Innovative Company" },
    { img: "/assets/img/aw5.png", alt: "award3", title: "Top 100 Global Companies" },
  ];

  const containerRef = useRef(null);

  return (
    <div className="award-bg">
      <h1 className="text-center font-bold mt-15 txt-body leading-12 text-[42px] sm:text-[42px] md:text-[50px] lg:text-[64px]
">Meet Our trophy cabinet</h1>
      <motion.div 
      className="mt-20 overflow-x-auto no-scrollbar mb-20 ml-20 cursor-grab active:cursor-grabbing"
      ref={containerRef}
      whiletap={{ cursor: "grabbing" }}>
        <motion.div 
        drag="x"
        dragConstraints ={containerRef}
        dragElastic={0.2}
        className="mt-0 md:mt-20 flex items-center justify-center gap-5 w-max mb-0 md:mb-20">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 w-[260px] md:w-[280px] flex flex-col items-center h-[180px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={award.img}
                alt={award.title}
                className="h-20 object-contain mb-4"
              />
              <p className="text-center text-[#5a3c2e] font-medium text-sm md:text-base">
                {award.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
};

export default AwardDiv;









//Framer Motion’s drag feature
//Outer motion.div = full slider box that moves when you drag.Outer motion.div → handles dragging.
//Inner motion.div = container that holds all your awards inside it.Inner motion.div → stores your cards (the content).
//drag="x" → allows horizontal dragging.
//dragConstraints={containerRef} → limits dragging within container width.
//dragElastic={0.2} → gives a little bounce feel.