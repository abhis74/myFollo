import "./PagesCss.css"
import {invest} from "../../src/Pages.json"
import defalutImg from "../../public/assets/defaultImg.svg"
import Feature from "../Utils/Feature.jsx"
import Form from "../Utils/Form.jsx"


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
                    <p>{invest.heroSection.subtextthree}</p>
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

      <Feature feature={invest.feature} heading="Investing, Redefined by Discipline." subtextone="At myfollo, we treat real estate not as an asset class, but as a strategy." subtextTwo="Every investment we guide is built on access, analysis, and execution, a process rooted in clarity, control, and conviction." btnText="Talk to Advisory"/>


       <div className="myFollotestimonialSection">
        <h2 className="myFollotestimonialSection_heading">
        Built on Performance. Trusted for Perspective.
        </h2>
        <p className="myFollotestimonialSection_para">
         With ₹15,000 Cr+ in assets under advisory, 2,500+ relationships, and 145+ family offices across India and global markets,
myfollo continues to be the trusted real estate wealth advisor for those who value insight, discretion, and enduring partnerships.
        </p>
        <div className="myFollotestimonialSection_box transact">
          {invest.trustedLeaders && invest.trustedLeaders.length > 0 ? (
            invest.trustedLeaders.map((testimonial, index) => (
                <div key={index} className="pagetestimonial">
              <p className="pagetestimonialText">{testimonial.heading}</p>
              <div className="dummyImg">

              <img src={testimonial.image} alt="" />
              </div>
              <div className="Author transact">
                <div className="AuthorDetails transact">
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
      </div>
      

        <Form Heading="Let’s Start a Conversation on Real Estate Wealth." subtext="Whether you’re acquiring, diversifying, or consolidating, myfollo’s advisory team will help you design a real estate strategy built on clarity, insight, and conviction." submitBtnText="Schedule Consultation"/>
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