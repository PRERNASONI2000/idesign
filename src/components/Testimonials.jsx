import React , {useState} from "react";
import { Link } from "react-router-dom";
import {motion , AnimatePresence} from "framer-motion";
import {
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { UsersData } from "./TestimonialsData";

const Testimonials = () => {
    // When you click Next, we show the next 2.When you click Prev, we show the previous 2.We’ll do this with a state called currentIndex.
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 2; // how many testimonials to show at once
    //go to next set of testimonials
    const handleNext = () => {
        if(currentIndex + itemsPerPage < UsersData.length){
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };
    //go to previous set of testimonials
    const handlePrev = () => {
        if(currentIndex - itemsPerPage >= 0){
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };
    // Only show 2 testimonials at a time
  const visibleUsers = UsersData.slice(currentIndex, currentIndex + itemsPerPage);
    return (
        <div className="testimonial">
            <h1 className="font-bold text-white text-[42px] sm:text-[42px] md:text-[50px] lg:text-[64px]
            leading-12 text-center mt-10 mb-15">our customers loves us</h1>
            <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex} //key changes when currentIndex changes, triggering re-render
                //    initial={{ opacity: 0, x: 50 }}
                //    animate={{ opacity: 1, x: 0 }}
                //    exit={{ opacity: 0, x: -50 }}
                //    transition={{ duration: 0.5, ease: "easeInOut" }}
                  initial={{opacity: 0, scale: 0.95}}
                  exit={{opacity: 0, scale: 0.95}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.5, ease: "easeInOut"}}
                   className="flex items-center mt-20 mb-5 justify-center max-w-7xl mx-auto relative">
                {/* Left Arrow */}
                <span role="button" tabIndex={0} aria-label="Show Next Testimonials" onClick={handlePrev} className="rounded-full prev-btn absolute left-0 bg-[#E9CBB7]/20 w-15 h-15 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#E9CBB7]/40">
                    <button><ChevronLeft size={30} className="txt-icon" /></button>
                </span>
                {/* Testimonial Cards */}
                <div className="flex flex-wrap justify-center gap-6 p-6 mx-16 w-full">
                    {visibleUsers.map((user, index) => (
                        <Link
                            key={index}
                            className="userBox shadow-lg flex flex-row items-center text-center relative
                            w-full sm:w-[45%] lg:w-[48%] transition-all duration-300 p-6"
                        >
                            <img src={user.img} alt="asset" className="absolute left-0 top-0 object-cover block w-[120px] h-[120px]" />
                            <img src={user.imgUser} alt="user-img" className="absolute left-1/2 top-8 object-cover block transform -translate-x-1/2 mb-20"/>
                            <p className="font-regular text-[18px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-left leading-9 mt-100 mx-5">{user.thought}</p>

                        </Link>
                    ))}
                </div>
                {/* Right Arrow */}
                <span role="button" tabIndex={0} aria-label="Show Prev Testimonials" onClick={handleNext} className="rounded-full prev-btn absolute right-0 bg-[#E9CBB7]/20 w-15 h-15 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#E9CBB7]/40">
                    <button><ChevronRight size={30} className="txt-icon" /></button>
                </span>
            </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Testimonials;