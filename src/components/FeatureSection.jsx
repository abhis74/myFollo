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
            <h2>Your Real Estate Portfolio.<br />Visualized with Clarity.</h2>
            <p>Gain a consolidated view of your real estate wealth from portfolio value and asset performance to appreciation, yield, and liquidity. Designed for clarity, built for confidence.</p>
            <p>Track your assets, monitor market movement, and evaluate portfolio growth in real time through India’s first integrated real estate wealth dashboard.</p>
            <Link to="/login">
            <button className="bannerButton">
             Login to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
