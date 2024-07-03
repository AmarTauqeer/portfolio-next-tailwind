import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        {/* <p className="uppercase text-sm tracking-widest text-gray-600">
          some texts
        </p> */}
        <div>
          <h2 className="py-4 text-gray-700">
            Hi, I'am <span className="text-[#5651e5]">Dr. Amar Tauqeer (Ph.D.)</span>
          </h2>
          <h2 className="py-2 text-gray-700">A Full-Stack Web Developer</h2>
          <p className="p-4 text-gray-600 max-w-[100%] m-auto">
            I'M A PROFESSIONAL SOFTWARE DEVELOPER WITH HAVING A PH.D. IN COMPUTER SCIENCE AT WAGENINGEN UNIVERSITY & RESEARCH, the NETHERLANDS.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/amar-tauqeer/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/AmarTauqeer" target="_blank">
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://twitter.com/AmarTauqeer" target="_blank">
                <BsTwitter />
              </Link>
            </div>
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                
                <Link href="" target="_blank"><BsFillPersonLinesFill /></Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
