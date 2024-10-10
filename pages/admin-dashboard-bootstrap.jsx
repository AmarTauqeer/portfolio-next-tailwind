import React from "react";
import DJ from "../public/dj-react.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const AdminDashboardBootstrap = () => {
  return (
    // <div className="w-full md:h-screen p-2 flex items-center py-16">crud demo</div>
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={DJ}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 uppercase">Admin Dashboard (with Bootstrap)</h2>
          <h3>Django/ MongoDB/ React/ Bootstrap/ Redux</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Project
          </p>
          <h2>Overview</h2>
          <p>
            An application supports admin panel with the following features:{" "}
          </p>
          <ul className="list-disc">
            <li>Single page application</li>
            <li>
              React, React-router, React-router-dom, Redux, Reduceres, Store
            </li>
            <li>Bootstrap, Django, REST API, Authentication</li>
            <li>Complete CRUD operations</li>
            <li>Swagger documentation</li>
          </ul>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://www.youtube.com/watch?v=wAa52utKTMk&ab_channel=AmarTauqeer"
              target="_blank"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a href="https://github.com/AmarTauqeer/Dashboard" target="_blank">
              Code
            </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
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

export default AdminDashboardBootstrap;
