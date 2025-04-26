import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar w-nav">
        <div className="container w-container">
          <div className="md:flex items-center justify-between">
            <Link to="/" className="cursor-pointer brand w-nav-brand">
              <img
                src="/logo.png"
                loading="eager"
                alt="SasMind logo"
                className="navbar-logo lg:h-[70px] md:h-[50px]"
              />
            </Link>
            <div className="">
              <nav
                role="navigation"
                className={`nav-menu w-nav-menu lg:flex lg:justify-center ${
                  isMobileMenuOpen ? "mobile-menu-open" : ""
                }`}
              >
                <Link
                  activeClass="active"
                  to="top_section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  aria-current="page"
                  className="nav-link w-nav-link cursor-pointer"
                >
                  Home
                </Link>

                <Link
                  activeClass="active"
                  to="about_section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link w-nav-link cursor-pointer "
                >
                  About
                </Link>

                <Link
                  activeClass="active"
                  to="plans_section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link w-nav-link cursor-pointer "
                >
                  Plans
                </Link>

                <Link
                  activeClass="active"
                  to="faq_section"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link w-nav-link cursor-pointer "
                >
                  FAQ
                </Link>

                <a
                  href="/login"
                  className="button-black-inline nav-button w-button nav-link md:!flex hidden"
                >
                  Login
                </a>
              </nav>
              <div className="">
                <div className="flex md:hidden justify-end">
                  <a
                    href="/login"
                    className="button-black-inline nav-button w-button w-[100px]"
                  >
                    Login
                  </a>
                </div>
                <div
                  className={`md:hidden block menu-button w-nav-button ${
                    isMobileMenuOpen ? "mobile-menu-open" : ""
                  }`}
                  onClick={toggleMobileMenu}
                >
                  <div className="w-icon-nav-menu">
                    <div className="two-bars"></div>
                    <div className="two-bars"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
