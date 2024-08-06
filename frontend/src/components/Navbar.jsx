import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logoo">
          <img src="/logo.png" alt="logo" width="100px" />
          <h1>Hire Me</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <div>
                <FaHome />
              </div>
              <Link to={"/"} onClick={() => setShow(!show)}>
                Home
              </Link>
            </li>
            <li>
              <div>
                <MdOutlineMiscellaneousServices />
              </div>
              <Link to={"/jobs"} onClick={() => setShow(!show)}>
                Jobs
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <div>
                  <RxDashboard />
                </div>
                <Link to={"/dashboard"} onClick={() => setShow(!show)}>
                  DashBoard
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"/login"} onClick={() => setShow(!show)}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
