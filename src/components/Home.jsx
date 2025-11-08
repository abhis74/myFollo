import { homePageData } from "../HomePageData.json";
import "./Home.css";
import { Link } from "react-router";
import Accordion from "../Utils/Accordion.jsx";
import { useState } from "react";
import FeatureSection from "./FeatureSection.jsx";
import TestimonialSection from "./TestimonialSection.jsx";
import mappImg  from "../assets/Home/Maskgroup.png";
import Form from "../Utils/Form.jsx";
import "./FeatureSection.css";
import arrow from "../assets/Home/upper-right-arrow.svg";
import deshboardImg  from "../assets/Home/dashboard.png"


const features= [
      {
        "icon": "./assets/Home/growth.svg",
        "title": "Invest",
        "description": "Curated real estate opportunities across India’s most promising markets, backed by diligence, data, and deep advisory insight. Build and diversify your real estate portfolio with confidence.",
        "cta": "Explore Investments",
        "ctaLink": "/invest"
      },
      {
        "icon": "./assets/Home/bill.svg",
        "title": "Transact",
        "description": "Unlock value through intelligent real estate transactions from acquisitions and divestments to portfolio restructuring. Every deal is backed by analysis, strategy, and precision execution.",
        "cta": "Explore Transactions",
        "ctaLink": "/transact"
      },
      {
        "icon": "./assets/Home/briefcase.svg",
        "title": "PREFO",
        "description": "A bespoke real estate wealth advisory for family offices and affluent investors. We manage, structure, and preserve multi-asset portfolios with institutional-grade governance and long-term vision.",
        "cta": "Explore PREFO",
        "ctaLink": "/Prefo"
      }
    ]
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
      {/* <FeatureSection features={homePageData.features} /> */}
      <div className="FeatureSection">
      <div className="featureCard">
        {features.map((feature, index) => (
          <div className="featureBox" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <Link to={feature.ctaLink}>
              {" "}
              <button className="featureCta">{feature.cta}</button>
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        ))}
      </div>

      <div className="dashboardSection">
        <img src={deshboardImg} alt="dashboard" />
        <div className="deshboardContant">
            <h2>Your Real Estate Portfolio.<br />Visualized with Clarity.</h2>
            <p>Gain a consolidated view of your real estate wealth from portfolio value and asset performance to appreciation, yield, and liquidity. Designed for clarity, built for confidence.</p>
            <p>Track your assets, monitor market movement, and evaluate portfolio growth in real time through India’s first integrated real estate wealth dashboard.</p>
            <Link to="/login">
            <button className="bannerButton">
             Login to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>

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
