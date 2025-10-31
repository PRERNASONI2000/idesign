import React from "react";
import Header from "../components/Header";
import PurposeCard from "../components/PurposeCard";
import FeatureCard from "../components/FeatureCard";
import WhyChooseCard from "../components/WhyChooseCard";
import Testimonials from "../components/Testimonials";
import AwardDiv from "../components/AwardDiv";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";


const Hero = () => {
    return(
      <>
        <Header />
        <PurposeCard />
        <FeatureCard />
        <WhyChooseCard />
        <Testimonials />
        <AwardDiv />
        <FAQ />
        <Footer />
      </>
    )
}

export default Hero;