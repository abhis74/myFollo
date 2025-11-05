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
                Schedule a Private Consultation
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
          <h2>Join <strong>mAPP</strong> — Where Partnerships Create Value</h2>
          <p>
           mAPP is a curated referral network for trusted professionals serving India’s wealth creators.
          </p>
          <p>
          Great partnerships begin with trust. <strong>mAPP</strong> unites select professionals — CAs, private bankers, wealth advisors, doctors, and legal experts — who connect with HNIs, NRIs, and Family Offices. By joining, you don’t just refer clients — you create lasting value while unlocking new opportunities for yourself.
          </p>
          <p>
            Over <strong>78%</strong> of our UHNI clients came through professional referrals via mAPP.
          </p>
          <Link to="/mApp">
            <button className="featureCta">Join mAPP</button>
          </Link>
        </div>

        <div className="mAppImage">
          <img src={mappImg} alt="mobileApp" />
        </div>
      </div>

      <TestimonialSection testimonials={homePageData.testimonials} brands={homePageData.brands}/>
      <Form Heading="Trusted by 400+ UHNI Families. Now, Let’s Focus on Yours" subtext="A one-on-one consultation with MyFollo experts ensures every decision is backed by insight, discretion, and long-term vision."/>
    </>
  );
}
export default Home;
