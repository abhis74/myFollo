import { homePageData } from "@/HomePageData.json";
import "./Home.css";
import { Link } from "react-router";
import Accordion from "@/Utils/Accordion";
import { useState } from "react";
import FeatureSection from "./FeatureSection";
import TestimonialSection from "./TestimonialSection";
import mappImg  from "../assets/Home/Maskgroup.png";
import Form from "@/Utils/Form";
function Home() {
  const [openIndex, setOpenIndex] = useState(0);
  const handleToggle = (index) => {
    console.log("Clicked index:", index);
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="homeContainer">
        <div className="bannerSection">
          <div className="bannerheadingBox">
            <h1>{homePageData.banner.title}</h1>
            <p className="bannersubtitle"> {homePageData.banner.subtitle}</p>
            <p className="bannerSubtext">{homePageData.banner.subText}</p>
            <Link to="/register">
              <button className="bannerButton">
                Request Private Consultation
              </button>
            </Link>
          </div>
        </div>
        <div className="highligh">
          <div className="highlightSection">
            {homePageData.hightlites.Achievements.map((item, index) => {
              return (
                <div className="highlightBox" key={index}>
                  <h3>{item.number}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
          <div className="accordion">
            <h2 className="accordionHeading">Who We Serve</h2>
            {homePageData.hightlites.Accordions.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <FeatureSection features={homePageData.features} />

      <div className="mAppSection">
        <div className="mAppbox">
          <h2> <strong>mAPP</strong> - Where Vision Meets Partnership</h2>
          <p>
         mAPP is MyFollo’s invitation-only alliance program that fosters meaningful partnerships with accomplished professionals who share our belief in long-term value creation.

          </p>
          <p>
            Through this program, individuals can engage with myfollo either as Internal Partners, working alongside our leadership to achieve shared objectives, or as External Partners, aligning with us to extend myfollo’s philosophy and expertise to a broader network.
         
          </p>
          <p>
           Together, we build synergies that strengthen relationships, unlock new opportunities, and advance the collective goal of redefining real estate wealth management in India.
          </p>
          <Link to="/mApp">
            <button className="featureCta">Explore  mAPP</button>
          </Link>
        </div>

        <div className="mAppImage">
          <img src={mappImg} alt="mobileApp" />
        </div>
      </div>

      <TestimonialSection testimonials={homePageData.testimonials} brands={homePageData.brands}/>
      <Form Heading="Advising ₹15,000 Cr+ in Real Estate Wealth.
Trusted by People Who Build, Own, and Grow with Vision" subtext="Experience the clarity, discretion, and intelligence that define MyFollo’s approach to real estate, from ownership and investment to management and advisory."/>
    </>
  );
}
export default Home;
