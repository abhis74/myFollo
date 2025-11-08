import { Link, NavLink } from "react-router";
import { navLinks } from "../HeaderData.json";
import LoginSvg from "../assets/log-in.svg";
import Logo from "../assets/logo.svg";
import style from "./Header.module.css";
import { useState } from "react";
function Header() {
  const [isshow, setIsShow] = useState(false);

  return (
    <header>
      <div className={style.topbarContainer}>
        <ul className={style.topbar}>
          <li><Link to="/blogs">Blog</Link></li>
          <li>
            <Link to="/login">
            <img src={LoginSvg} alt="Login" /> Login
            </Link>
          </li>
        </ul>
      </div>
      <nav className={style.nav}>
        <div className={style.logo}>
           <Link to="/"> <img src={Logo} alt="Logo" /></Link>
        </div>
        <ul className={style.navlinks}>
          {navLinks.map((item, index) => {
            return (
              <li className="navlinks" key={index}>
                {/* {item.name !== "Why MyFollo" ? (
                  <NavLink  className={style.activelink} to={item.path}>{item.name} </NavLink >
                ) : (
                  <div
                    name="Why MyFollo"
                    id="myFollo"
                    className={style.myFollo}
                  >
                    <p
                      onClick={() => {
                        setIsShow(!isshow);
                      }}
                    >
                      {item.name} <img src={VectorArrow} alt="arrow" />
                    </p>
                    {isshow &&
                    <div className={style.subDownLinks}>

                     
                      {item.subLinks.map((subItem, index) => {
                        return (
                          <Link key={index} to={subItem.path}>
                            {subItem.name}
                          </Link>
                        );
                      })}
                      </div>
                       }
                  </div>
                )} */}
                <NavLink  className={style.activelink} to={item.path}>{item.name} </NavLink >
              </li>
            );
          })}
        </ul>
        <Link to="/LetsTalk">
          <button className={style.requestToTalk}>Let's Talk</button>
        </Link>
      </nav>
    </header>
  );
}
export default Header;
