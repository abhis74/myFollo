import "./PagesCss.css"
import {transact} from "../pages.json"
import defalutImg from "../assets/defaultImg.svg"
import Feature from "@/Utils/Feature"
import Form from "@/Utils/Form"
import HightLightFeatures from "@/Utils/hightLightFeatures"



function Transact(){

    return(
        <>
        <div className="transactContainer">
        <div className="pagebannerSection">
          <div className="pagebannerheadingBox">
            <h1>{transact.banner.title}</h1>
            <p className="pagebannersubtitle"> {transact.banner.subtitle}</p>
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
                  {transact.heroSection.heading}
                </h2>
                <p>{transact.heroSection.subtextone}</p>
              </div>


          <div className="highlightPoints">
            <div className="defaultImgBox">

            <img src={defalutImg} alt="" />
            </div>
            <div className="points">
              {
                transact.heroSection.points.map((point,index)=>(
                  <div className="point">
                    <h3>{point.heading}</h3>
                    <p>{point.subText}</p>
                  </div>
                ))
              }
              {
                 transact.heroSection.subpoints.map((point,index)=>(
                  <div className="subpoint">
                    <img src={point.icon} alt="" />
                    <h3>{point.heading}</h3>
                   
                  </div>
                ))
              }
            </div>
          </div>
      </div>

      <Feature feature={transact.feature} heading="Let us show‍ you how we make it happen." subtextone="Our Approach" subtextTwo="We don’t just transact — we strategize, position, and execute every step to protect and grow your wealth." btnText="Confidently Transact"/>

   <HightLightFeatures hightLight={transact.hightLightFeatures} className="Transact"/>

    <div className="transacttestimonialSection">

              <h2 className="transacttestimonialSection_heading">What Sets Us Apart</h2>
              <p className="transacttestimonialSection_para">Transactions with MyFollo are built on trust, discretion, and proven outcomes.</p>
           <div className="transacttestimonialSection_box">
            
        {transact.trustedLeaders && transact.trustedLeaders.length > 0 ? (
          transact.trustedLeaders.map((testimonial, index) => (
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

 <Form Heading="Let’s Help You Transact With Confidence" subtext="Whether you’re selling, leasing, or restructuring — our advisory team will design a bespoke strategy for you."/>
           <div className="bandSection">
        <div className="band1List">
          {transact.brands &&
            transact.brands.map((brand, index) => {
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
export default Transact