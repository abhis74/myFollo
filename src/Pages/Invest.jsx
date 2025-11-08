import "./PagesCss.css"
import {invest} from "../../src/Pages.json"
import defalutImg from "../assets/defaultImg.svg"
import Feature from "../Utils/Feature"
import Form from "../Utils/Form"


function Invest(){

    return(
        <>
        <div className="investContainer">
        <div className="pagebannerSection">
          <div className="pagebannerheadingBox">
            <h1>{invest.banner.title}</h1>
            <p className="pagebannersubtitle"> {invest.banner.subtitle}</p>
            {/* <Link to="/register">
              <button className="bannerButton">
                Schedule a Private Consultation
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="pageHeroSection">
              <div className="headingsection">
                <h2>
                  {invest.heroSection.heading}
                </h2>
                <p>{invest.heroSection.subtextone}</p>
                    <p>{invest.heroSection.subtextTwo}</p>
              </div>


          <div className="highlightPoints">
            <div className="defaultImgBox">

            <img src={defalutImg} alt="" />
            </div>
            <div className="points">
              {
                invest.heroSection.points.map((point,index)=>(
                  <div className="point">
                    <h3>{point.heading}</h3>
                    <p>{point.subText}</p>
                  </div>
                ))
              }
            </div>
          </div>
      </div>

      <Feature feature={invest.feature} heading="Let us show‍ you how we make it happen." subtextone="Our Approach" subtextTwo="We combine access, advice, and execution to help you invest with confidence" btnText="Talk to Advisory"/>
     <div className="testimonialSection">
        {invest.trustedLeaders && invest.trustedLeaders.length > 0 ? (
          invest.trustedLeaders.map((testimonial, index) => (
            <div key={index} className="pagetestimonial">
              <p className="pagetestimonialText">{testimonial.heading}</p>
              <div className="dummyImg">

              <img src={testimonial.image} alt="" />
              </div>
              <div className="Author">
                <div className="AuthorDetails">
                  <p className="testimonialAuthor"> <span>Location : </span>{testimonial.location}</p>
                  <p className="testimonialPosition"><span>IRR Range : </span>{testimonial.range}</p>
                  <p className="titletestimonialPosition">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No testimonials available.</p>
        )}
      </div>
      

        <Form Heading="Let’s Talk Real Estate Intelligently." subtext="Whether you’re investing, diversifying, or preserving wealth — our advisory team will craft a bespoke strategy for you."/>
           <div className="bandSection">
        <div className="band1List">
          {invest.brands &&
            invest.brands.map((brand, index) => {
              return (
                <div key={index} className="bandItem">
                  <img src={brand} alt="brand" />
                </div>
              );
            })}
        </div>
       
      </div>
        </>
    )

}
export default Invest