import "./PagesCss.css";
import { myFollo } from ".../../src/Pages.json";
import HightLightFeatures from "@/Utils/hightLightFeatures";
import Ellipse from "../assets/Pages/Ellipse.svg";
import Polygon from "../assets/Pages/Polygon.svg";
import Rectangle from "../assets/Pages/Rectangle.svg";

function MyFollo() {
  return (
    <>
      <div className="transactContainer myFollo">
        <div className="pagebannerSection">
          <div className="pagebannerheadingBox">
            <h1>{myFollo.banner.title}</h1>
            <p className="pagebannersubtitle"> {myFollo.banner.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="pageHeroSection myFollo">
        <div className="headingsection myFollo">
          <h2>{myFollo.heroSection.heading}</h2>
          <p>{myFollo.heroSection.subtextone}</p>
          <p>{myFollo.heroSection.subtextTwo}</p>
        </div>

        <div className="highlightSection myFollo">
          {myFollo.hightlites.Achievements.map((item, index) => {
            return (
              <div className="highlightBox" key={index}>
                <h3>{item.number}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
        {/* <div className="highlightPoints">
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
          </div> */}
      </div>

      <div className="myFolloVision">
        <p className="visionText">
          "We exist to transform real estate from a collection of emotional
          property purchases into a professionally managed wealth-creation
          engine."
        </p>
        <p className="visiontitle">MyFollo VISION</p>
      </div>

      <HightLightFeatures
        hightLight={myFollo.hightLightFeatures}
        className="myFollo"
      />

      <div className="myFollotestimonialSection">
        <h2 className="myFollotestimonialSection_heading">
          Meet the Leadership
        </h2>
        <p className="myFollotestimonialSection_para">
          Seasoned professionals with decades of combined experience in real
          estate, finance, and technology
        </p>
        <div className="myFollotestimonialSection_box">
          {myFollo.trustedLeaders && myFollo.trustedLeaders.length > 0 ? (
            myFollo.trustedLeaders.map((testimonial, index) => (
              <div key={index} className="pagetestimonial">
                <div className="dummyImg">
                  <img src={testimonial.image} alt="" />
                </div>
                <div className="Author">
                  <div className="AuthorDetails">
                    <p className="testimonialAuthor">
                      <span className="autordetails">
                        <span>{testimonial.name}</span>
                        <span>{testimonial.position}</span>
                      </span>
                      <span className="linkedin">
                        <img src={testimonial.icon} alt="" />
                      </span>
                    </p>
                  </div>
                  <p className="titletestimonialPosition">
                    {testimonial.review}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No testimonials available.</p>
          )}
        </div>
      </div>
      <div className="myFolloEthics">
        <div className="ethicsbox">
          <h3>Governance & Ethics</h3>
          <p className="ethicsboxText">
            Our commitment to the highest standards of professional conduct and
            fiduciary responsibility
          </p>
          <div className="ethicspoint">
            <div className="pointers">
              <img src={Rectangle} alt="" />
              <h4>Integrity</h4>
            </div>
            <div className="pointers">
              <img src={Polygon} alt="" />
              <h4>Transparency</h4>
            </div>
            <div className="pointers">
              <img src={Ellipse} alt="" />
              <h4>Compliance</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyFollo;
