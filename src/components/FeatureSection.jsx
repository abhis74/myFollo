import { Link } from "react-router";
import "./FeatureSection.css";
import arrow from "../assets/Home/upper-right-arrow.svg";
import deshboardImg  from "../assets/Home/dashboard.png"

function FeatureSection({ features }) {
  return (
    <div className="FeatureSection">
      <div className="featureCard">
        {features.map((feature, index) => (
          <div className="featureBox" key={index}>
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <Link to={feature.ctaLink}>
              {" "}
              <button className="featureCta">{feature.cta}</button>
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        ))}
      </div>

      <div className="dashboardSection">
        <img src={deshboardImg} alt="dashboard" />
        <div className="deshboardContant">
            <h2>One Dashboard,<br />Complete Control</h2>
            <p>Track, analyze, and grow your real estate portfolio with absolute clarity and discretion.</p>
            <Link to="/login">
            <button className="bannerButton">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
