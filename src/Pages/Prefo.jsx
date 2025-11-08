import "./PagesCss.css";
import { prefo } from "../../src/Pages.json";
import { motion } from "framer-motion";
import HightLightFeatures from "@/Utils/hightLightFeatures";
import Feature from "@/Utils/Feature";
import Form from "@/Utils/Form";

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
            <p>{prefo.heroSection.subtextone}</p>
            <p>{prefo.heroSection.subtextTwo}</p>
            <p>{prefo.heroSection.paragraph}</p>
            <div className="authorsection">
              <div className="authordetails">
                <p>{prefo.heroSection.author}</p>
                <p>{prefo.heroSection.position}</p>
              </div>
            </div>
          </div>
          <div
         
            className="heroimage"
          >
            <motion.img
              style={{ width: "100%" }}
              src={prefo.heroSection.herosectionImg}
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
        heading="Let us show‍ you how we make it happen."
        subtextone="Our Process"
        subtextTwo="A Proven Framework to Build & Preserve Legacy"
        btnText="Download PDF"
      />

      <div className="transacttestimonialSection">
        <h2 className="transacttestimonialSection_heading">
          The PREFO Advantage
        </h2>
        <p className="transacttestimonialSection_para">
          What makes us different from traditional advisory
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
        Heading="Ready to discuss your real estate portfolio?
"
        subtext="Schedule a confidential conversation with our senior advisors.
"
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
