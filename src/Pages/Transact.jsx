import "./PagesCss.css"
import {transact} from "../../src/Pages.json"
import defalutImg from "../../public/assets/defaultImg.svg"
import Feature from "../Utils/Feature.jsx"
import Form from "../Utils/Form.jsx"
import HightLightFeatures from "../Utils/HightLightFeatures.jsx"



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
                    <div className="subpointsdiv">

                    <h3>{point.heading}</h3>
                    <p>{point.subText}</p>
                    </div>
                   
                  </div>
                ))
              }
            </div>
          </div>
      </div>

      <Feature feature={transact.feature} heading="A Structured Approach to Every Transaction" subtextone="Our Approach" subtextTwo="At myfollo, every transaction follows a defined process, designed to deliver structure, precision, and results.
 We evaluate, position, and execute with discipline, ensuring every mandate, whether sale, lease, or portfolio rebalancing, is managed intelligently and discreetly from start to finish.
" btnText="Schedule a Consultation 
"/>

   <HightLightFeatures hightLight={transact.hightLightFeatures} className="Transact"/>

    <div className="transacttestimonialSection">

              <h2 className="transacttestimonialSection_heading">What Sets myfollo Apart</h2>
              <p className="transacttestimonialSection_para">Transactions with myfollo are built on trust, discretion, and disciplined execution.</p>
              <p className="transacttestimonialSection_para">From the first conversation to final closure, every mandate is guided by data, verified networks, and institutional-grade governance, ensuring outcomes that protect both value and privacy.</p>
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

 <Form Heading="Let’s Define Your Next Real Estate Move." subtext="Whether you’re selling, leasing, or restructuring, our advisory team designs every transaction with clarity, discretion, and strategy.
" submitBtnText="Schedule a Private Consultation"/>
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