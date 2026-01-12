import React, { useState } from "react";
import { NavLink, useLocation } from "react-router";
import Container from "./Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#2563eb" : "#374151",
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? "600" : "400",
  });

  const navLinks = [
    { name: "Home", path: "/", end: true },
    { name: "About", path: "/about" },
    { name: "SEO Case study", path: "/seo-case-study" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const serviceLinks = [
    { name: "Web Design", path: "/services/web-design" },
    { name: "SEO Marketing", path: "/services/seo" },
    { name: "Content Writing", path: "/services/content" },
  ];

  const isServiceActive = pathname.startsWith("/services");

  return (
    <nav className="flex items-center bg-gradient-to-r from-[#f0fafc] to-[#fff8f7] w-full md:w-[1920px] h-[122px] border-b border-gray-100 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center w-full md:w-[1420px] h-[74px] px-4">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                src="/logo.png"
                className="w-[180px] md:w-[216px] h-auto md:h-[44px]"
                alt="Logo"
              />
            </NavLink>
          </div>

          <div className="hidden w-[763px] h-[74px] md:flex justify-center items-center space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                style={navLinkStyles}
                className="hover:text-blue-600 transition-colors font-inter font-normal text-[20px] leading-[26px] tracking-normal text-gray-900"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="relative group cursor-pointer">
              <button
                className={`flex items-center gap-1 transition-colors ${
                  isServiceActive
                    ? "text-blue-600 font-semibold underline"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Services
                <ChevronDownIcon />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    style={navLinkStyles}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {navLinks.slice(2, 4).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                style={navLinkStyles}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-center w-[249px] h-[50px] bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg active:scale-95">
            <a
              href="tel:+8801404282727"
              className="flex items-center justify-center gap-2 text-white font-semibold w-full h-full"
            >
              <PhoneIcon />
              <span>+8801404282727</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="absolute top-[122px] left-0 w-full bg-white border-t border-gray-100 px-6 py-8 space-y-4 shadow-2xl md:hidden overflow-y-auto max-h-[calc(100vh-122px)]">
          {navLinks.slice(0, 2).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-xl py-2 border-b border-gray-50"
              style={navLinkStyles}
            >
              {link.name}
            </NavLink>
          ))}

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex justify-between items-center w-full text-xl py-2 border-b border-gray-50 ${
                isServiceActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              Services
              <span
                className={`transform transition-transform ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDownIcon />
              </span>
            </button>
            {mobileServicesOpen && (
              <div className="bg-gray-50 mt-2 rounded-lg">
                {serviceLinks.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 text-lg border-b border-white last:border-none"
                    style={navLinkStyles}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2, 4).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-xl py-2 border-b border-gray-50"
              style={navLinkStyles}
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="tel:+8801404282727"
            className="w-full hidden bg-blue-600 text-white px-4 py-4 rounded-xl flex justify-center items-center gap-2 font-bold mt-6 shadow-md"
          >
            <PhoneIcon />
            <span className="text-[#FFFFFF] font-['Inter'] font-medium text-[16px] md:text-[20px] leading-[26px]">
              Call +8801404282727
            </span>
          </a>
        </div>
      )}
    </nav>
  );
};

const ChevronDownIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-8 w-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Header;
