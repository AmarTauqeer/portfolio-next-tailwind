import React from "react";
import AZUREDOTNET from "../public/dotnetcore.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const AzureDotnetCoreEmployeeManagement = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={AZUREDOTNET}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 uppercase">
            Employee Management Application on Microsoft Azure
          </h2>
          <h3>
            Dotnet Core, Dotnet Core Entityframework, NextJS, ReactJS, Tailwind,
            SQL Server, Azure SQL Database
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Project
          </p>
          <h2>Overview</h2>
          <p>
            The application is developed in combinition of Dotnetcore, NextJS,
            and Sql Server with the following features
          </p>
          <ul className="list-disc">
            <li>Dotnet Core authentication with Token and authorization.</li>
            <li>Single page application.</li>
            <li>Post filteration based on department and employee.</li>
            <li>
              User registration, signin, token, referesh token, department, and
              employee management.
            </li>
            <li>Deployement on Microsoft Azure</li>
            <li>Responsive</li>
          </ul>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://coreemployeeapi.azurewebsites.net/swagger/index.html"
              target="_blank"
            >
              Live Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://www.youtube.com/watch?v=cO9n0PlyD4w&ab_channel=AmarTauqeer"
              target="_blank"
            >
              Video (Backend)
            </a>
          </button>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://www.youtube.com/watch?v=U5HgMbhuv-8&ab_channel=AmarTauqeer"
              target="_blank"
            >
              Video (Frontend)
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/AmarTauqeer/EmployeeMangement.git"
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
                <RiRadioButtonFill className="pr-1" /> Dotnet Core C#
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Dotnet Core Entity
                Framework
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL Server
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Azure SQL Database
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

export default AzureDotnetCoreEmployeeManagement;
