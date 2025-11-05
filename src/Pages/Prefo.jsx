import "./PagesCss.css";
import { prefo } from "../pages.json";
import defalutImg from "../assets/defaultImg.svg";
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
          <img
            className="heroimage"
            src={prefo.heroSection.herosectionImg}
            alt={prefo.heroSection.author}
          />
        </div>
      </div>
      <HightLightFeatures hightLight={prefo.hightLightFeatures} className="Prefo"/>
      <Feature feature={prefo.feature} heading="Let us show‍ you how we make it happen." subtextone="Our Process" subtextTwo="A Proven Framework to Build & Preserve Legacy" btnText="Download PDF"/>

               <div className="transacttestimonialSection">

              <h2 className="transacttestimonialSection_heading">The PREFO Advantage</h2>
              <p className="transacttestimonialSection_para">What makes us different from traditional advisory</p>
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
                  <p className="titletestimonialPosition">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))
          
        ) 
        : (
          <p>No testimonials available.</p>
        )}
         </div>  
      </div>

       <Form Heading="Ready to discuss your real estate portfolio?
" subtext="Schedule a confidential conversation with our senior advisors.
"/>
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
