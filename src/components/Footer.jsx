import "./footer.css";
import Logo from "../assets/logo.svg";
import { Link } from "react-router";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="logoSection">
          <div className="sitelogo">
            <img src={Logo} alt="logo" />
            <p>Valion E Assets Private Limited</p>
          </div>
          <div className="contactinfo">
            <p>+91 898 900 0000</p>
            <Link to="mailto:info@myfollo.com">info@myfollo.com</Link>
          </div>
        </div>
        <div className="linksSection">
          <div className="pagesLinks">
            <ul>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/Career">Career</Link>
              </li>
              <li>
                <Link to="/B2B">B2B</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="socialLinks">
            <ul>
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyrights footer"><p>© 2025 MyFollo. All rights reserved.</p></div>
    </>
  );
}

export default Footer;
