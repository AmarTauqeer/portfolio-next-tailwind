import React from "react";
import SpringReactMySQLTailwind from "../public/spring-next-react-mysql-tailwind.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const SpringBlog = () => {
  return (
    // <div className="w-full md:h-screen p-2 flex items-center py-16">crud demo</div>
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={SpringReactMySQLTailwind}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 uppercase">Blog Application</h2>
          <h3>Java Spring Boot, NextJS, ReactJS, Tailwind, MySQL</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Project
          </p>
          <h2>Overview</h2>
          <p>A blog application with the following features: </p>
          <ul className="list-disc">
            <li>Java Spring boot 3+ web security. Authentication with JWT.</li>
            <li>One to many, many to one, many to many relationships.</li>
            <li>Role based authentication.</li>
            <li>
              Images upload store and reterive with other data from the server.
            </li>
            <li>Single page application.</li>
            <li>Category wise search/filteration</li>
            <li>CRUD operations on user and posts.</li>
            <li>Responsive</li>
          </ul>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://www.youtube.com/watch?v=fi4BAo5-g28&ab_channel=AmarTauqeer"
              target="_blank"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/AmarTauqeer/spring-next-mysql-blog"
              target="_blank"
            >
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java Spring Boot
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default SpringBlog;
