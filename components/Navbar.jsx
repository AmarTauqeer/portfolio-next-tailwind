import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

const Navbar = () => {
  const [toggle, setToggel] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/admin-dashboard-bootstrap" ||
      router.asPath === "/admin-dashboard-material-redux" ||
      router.asPath === "/crud-demo" ||
      router.asPath === "/data-sharing-shacl" ||
      router.asPath === "/data-sharing" ||
      router.asPath === "/ecommerce" ||
      router.asPath === "/employee-management" ||
      router.asPath === "/graph-validator" ||
      router.asPath === "/mern-full-stack" ||
      router.asPath === "/mern-redux" ||
      router.asPath === "/professional-dashboard" ||
      router.asPath === "/react-django-mongodb-crud-app" ||
      router.asPath === "/shopping-cart-paypal" ||
      router.asPath === "/windo-desktop-app"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleToggle = (e) => {
    setToggel(!toggle);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <>
      <div
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100]"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <h3>
            <Link href="/" className="text-2xl">Portfolio</Link>
          </h3>
          <div>
            <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#resume">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Resume
                </li>
              </Link>
              <Link href="/#project">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Project
                </li>
              </Link>
              <Link href="/#skill">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skill
                </li>
              </Link>
              <Link href="/#publication">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Publication
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="md:hidden" onClick={handleToggle}>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            toggle
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              toggle
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-3 ease-in duration-500"
                : "fixed left-[-100%] p-10 ease-in duration-500"
            }
          >
            <div className="flex w-full justify-between items-center">
              <h4>
                <Link onClick={() => setToggel(false)} href="/">
                  Amar Tauqeer Portfolio
                </Link>
              </h4>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleToggle}
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">helooo</p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link onClick={() => setToggel(false)} href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link onClick={() => setToggel(false)} href="/#about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link onClick={() => setToggel(false)} href="/#project">
                  <li className="py-4 text-sm">Project</li>
                </Link>
                <Link onClick={() => setToggel(false)} href="/#skill">
                  <li className="py-4 text-sm">Skill</li>
                </Link>
                <Link onClick={() => setToggel(false)} href="/#publication">
                  <li className="py-4 text-sm">Publication</li>
                </Link>
                <Link onClick={() => setToggel(false)} href="/#contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
