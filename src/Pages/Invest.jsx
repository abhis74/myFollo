import "./PagesCss.css"
import {invest} from "../pages.json"
import defalutImg from "../assets/defaultImg.svg"
import Feature from "@/Utils/Feature"


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

      <Feature feature={invest.feature} heading="Let us show‍you how we make it happen." subtextone="ur Approach" subtextTwo="We combine access, advice, and execution to help you invest with confidence" btnText="Talk to Advisory"/>



        </>
    )

}
export default Invest