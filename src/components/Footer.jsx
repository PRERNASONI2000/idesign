import React from "react";

const Footer = () => {
    return (
       <footer>
        <img src="./assets/img/logo.png" alt="logo" className="img-fluid mx-auto block mt-[3rem] mb-[4rem]" />
      {/* <section className="relative w-full h-[80vh] overflow-hidden">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/QZc7cZR0oGs?autoplay=1&mute=1&loop=1&playlist=QZc7cZR0oGs"
    title="YouTube video"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
  ></iframe>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/50">
    <h1 className="text-5xl font-bold mb-4">Learn Anytime, Anywhere</h1>
    <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700">
      Start Learning
    </button>
  </div>
</section>
 */}


        <p className="text-white font-medium md-[26px] sm:text-[23px] xs:text-[20px] text-center">Copyright © Brett Rutecky LLC - All Rights Reserved 2025</p>
        <div className="flex justify-center align-middle text-white font-mediumtext-center md:mb-[0rem] sm:mb-[4rem] xs:mb-[4rem]">
            <ul className="flex justify-center items-center lg:gap-6 xs:gap-2 md-[28px] sm:text-[25px] 
        xs:text-[20px] ">
                <li><a href="#">Support</a><span className="ml-4">|</span></li>
                <li><a href="#">Privacy Policy</a><span className="ml-4">|</span></li>
                <li><a href="#">Refund Policy</a><span className="ml-4">|</span></li>
                <li><a href="#">Terms of Services</a></li>
            </ul>
        </div>
       </footer>
    )
}

export default Footer;









//security setting called X-Frame-Options