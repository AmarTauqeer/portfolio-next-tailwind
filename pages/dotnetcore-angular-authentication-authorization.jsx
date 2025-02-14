import React from "react";
import DotnetCoreAngularAuthenticationAuthorization from "../public/dotnetangular.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const DotnetCoreAngularAuthenticationAuthorizationApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={DotnetCoreAngularAuthenticationAuthorization}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 uppercase">Dotnetcore Microservices with Kafka and K8s Application</h2>
          <h3>
          Dot Net Core and Angular Permission Management Application
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Project
          </p>
          <h2>Overview</h2>
          <p>Frontend is developed in Angular 19 while backend is developed in Dotnet Core 8. The application is secured with JWT.</p>
          
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://youtu.be/PMjK62g82GE"
              target="_blank"
            >
              Video
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/AmarTauqeer/DotnetcoreAngularPermissionManagement"
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
                <RiRadioButtonFill className="pr-1" /> Angular 19
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Dotnet Core 8 C#
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Dotnet Core Entity Framework
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL Server
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Angular Material UI
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

export default DotnetCoreAngularAuthenticationAuthorizationApp;
