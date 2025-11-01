import "./PagesCss.css"
import {transact} from "../pages.json"
import defalutImg from "../assets/defaultImg.svg"


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
            </div>
          </div>
      </div>

        </>
    )

}
export default Transact