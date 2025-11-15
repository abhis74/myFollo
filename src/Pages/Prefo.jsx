import "./PagesCss.css";
import { prefo } from "../../src/Pages.json";
import { motion } from "framer-motion";
import HightLightFeatures from "../Utils/HightLightFeatures.jsx";
import herosectionimage from "../../public/assets/Pages/herosectionimage.png" 
import Feature from "../Utils/Feature.jsx";
import Form from "../Utils/Form.jsx";

function Prefo() {
  return (
    <>
      <div className="PrefoContainer">
        <div className="pagebannerSection">
          <div className="pagebannerheadingBox">
            <h1>{prefo.banner.title}</h1>
            <p className="pagebannersubtitle"> {prefo.banner.subtitle}</p>
            {/* <Link to="/register">
              <button className="bannerButton">
                Schedule a Private Consultation
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="pageHeroSection">
        <div className="prefoheadingsection">
          <div className="prefoheadingsectionBox">
            <h2>{prefo.heroSection.heading}</h2>
            <p className="subtextone">{prefo.heroSection.subtextone}</p>
            <p className="subtextTwo">{prefo.heroSection.subtextTwo}</p>
            <p className="NarrativeparagraphOne">{prefo.heroSection.NarrativeparagraphOne}</p>
            <p className="Narrativeparagraphtwo">{prefo.heroSection.Narrativeparagraphtwo}</p>
            <div className="authorsection">
              <div className="authordetails">
               <p className="FounderQuote">{prefo.heroSection.FounderQuote}</p>
                <p className="position">{prefo.heroSection.position}</p>
                <p className="author">{prefo.heroSection.author}</p>
              </div>
            </div>
          </div>
          <div
         
            className="heroimage"
          >
            <motion.img
              style={{ width: "100%" }}
              src={herosectionimage}
              alt={prefo.heroSection.author}
               initial={{ y: 10 }} // Initial position
                animate={{ y: [10, -30] }} // Animate up to -50px, then back to 0px
                transition={{
                duration: 0.3, // Duration of one full cycle (up and down)
                ease: "easeInOut", // Smooth start and end 
                }}
            />
          </div>
        </div>
      </div>
      <HightLightFeatures
        hightLight={prefo.hightLightFeatures}
        className="Prefo"
      />
      <Feature
        feature={prefo.feature}
        heading="A Structured Approach to Managing Generational Real Estate Portfolios"
        
        subtextTwo="Our process blends discipline, governance, and long-term perspective ensuring your real estate holdings are structured, monitored, and executed with the same rigor applied to any institutional asset class."
        btnText="Schedule a Consultation"
      />

      <div className="transacttestimonialSection">
        <h2 className="transacttestimonialSection_heading">
         The PREFO Advantage
        </h2>
        <p className="transacttestimonialSection_para">
          Quiet Strength. Disciplined Stewardship. Uncompromising Alignment.
        </p>
        <div className="transacttestimonialSection_box">
          {prefo.trustedLeaders && prefo.trustedLeaders.length > 0 ? (
            prefo.trustedLeaders.map((testimonial, index) => (
              <div key={index} className="pagetestimonial">
                <div className="dummyImg">
                  <img src={testimonial.image} alt="" />
                </div>
                <div className="Author">
                  <div className="AuthorDetails">
                    <p className="pagetestimonialText">{testimonial.heading}</p>
                    <p className="titletestimonialPosition">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No testimonials available.</p>
          )}
        </div>
      </div>

      <Form
        Heading="Your Portfolio. Our Perspective."
        subtext="Speak with our advisory team to evaluate your portfolio, uncover risks, and plan for long-term growth and continuity."
        submitBtnText="Schedule a Private Consultation"
      />
      <div className="bandSection">
        <div className="band1List">
          {prefo.brands &&
            prefo.brands.map((brand, index) => {
              return (
                <div key={index} className="bandItem">
                  <img src={brand} alt="brand" />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
export default Prefo;
