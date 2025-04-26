import React from "react";
import {
  NavigationBar,
  Hero,
  AboutUs,
  Features,
  CTA,
  Pricing,
  Footer,
} from "../constants/exports";
import FAQs from "../components/FAQs";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <main>
      <NavigationBar />
      <Element name="top_section" className="element">
        <Hero />
      </Element>
      <Element name="about_section" className="element">
        <AboutUs />
      </Element>
      <Features />
      <CTA />
      <Element name="plans_section" className="element">
        <Pricing />
      </Element>
      <Element name="faq_section" className="element">
        <FAQs />
      </Element>
      <Footer />
    </main>
  );
};

export default Home;
