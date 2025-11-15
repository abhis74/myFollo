import "./PagesCss.css";
import { transact, JoinMAppData } from "../../src/Pages.json";
import defalutImg from "../../public/assets/defaultImg.svg"
import bulding from "../../public/assets/Pages/ph_building-office-bold.svg";
import check from "../../public/assets/Pages/check.svg";
import Feature from "../Utils/Feature.jsx";
import Form from "../Utils/Form.jsx";

function JoinMApp() {
  return (
    <>
      <div className="transactContainerContainer ">
        <div className="pagebannerSection">
          <div className="pagebannerheadingBox">
            <p className="subtext">
              {" "}
              <span>
                <img src={bulding} alt="bulding" />
              </span>
              {JoinMAppData.banner.subtext}
            </p>
            <h1>{JoinMAppData.banner.title}</h1>
            <p className="pagebannersubtitle">
              {" "}
              {JoinMAppData.banner.subtitle}
            </p>
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
          <h2>{JoinMAppData.heroSection.heading}</h2>
          <span>{JoinMAppData.heroSection.headingpart}</span>
          <p>{JoinMAppData.heroSection.subtextone}</p>

          <div className="highlightPointsSection">
            <ul>
              {JoinMAppData.heroSection.highlightpoints.map((item, index) => {
                return (
                  <li className="highlightpointsItem" key={index}>
                    <span>
                      <img src={check} alt="check" />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="highlightPoints">
          <div className="defaultImgBox">
            <img src={defalutImg} alt="" />
          </div>
          <div className="points">
            {JoinMAppData.heroSection.points.map((point, index) => (
              <div className="point">
                <h3>{point.heading}</h3>
                <p>{point.subText}</p>
              </div>
            ))}
            {JoinMAppData.heroSection.subpoints.map((point, index) => (
              <div className="subpoint">
                <img src={point.icon} alt="" />
                <h3>{point.heading}</h3>
              </div>
            ))}
            <button className="featureCta">Join mAPP</button>
          </div>
        </div>
      </div>

      <Feature
        feature={transact.feature}
        heading="Let us show‍ you how we make it happen."
        subtextone="Our Process"
        subtextTwo="A Proven Framework to Build & Preserve Legacy"
        btnText="Refer a Client"
      />

      <div className="JoinMAppSection">
        <h2 className="transacttestimonialSection_heading">Our Track Record</h2>
        <p className="transacttestimonialSection_para">
          Transactions with MyFollo are built on trust, discretion, and proven
          outcomes.
        </p>
        <div className="transacttestimonialSection_box">
          <div className="highlightSection JoinMAppData">
            {JoinMAppData.hightlightes.map((item, index) => {
              return (
                <div className="highlightBox" key={index}>
                  <h3>{item.number}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Form
        Heading="Let’s create value together."
        subtext="Whether you want to refer a client or join the program, we’re happy to connect."
        className="JoinMAppData"
        submitBtnText="Submit"
      />
      <div className="bandSection">
        <div className="band1List">
          {JoinMAppData.brands &&
            JoinMAppData.brands.map((brand, index) => {
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
export default JoinMApp;
