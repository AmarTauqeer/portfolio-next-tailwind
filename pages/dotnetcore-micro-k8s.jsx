import React from "react";
import DotnetCoreMicroserviceK8s from "../public/DotnetcoreMicroserviceK8s.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const DotnetCoreMicroserviceKafkaK8sApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={DotnetCoreMicroserviceK8s}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 uppercase">Dotnetcore Microservices with Kafka and K8s Application</h2>
          <h3>
          Dotnet Core, Dotnet Core Entityframework, Kafka, K8s, Minikube, NextJS,
                NextUI, ReactJS, Tailwind, SQL Server
          </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Project
          </p>
          <h2>Overview</h2>
          <p>The application is secrured with HTTP Cookies only, and JWT and is deployed on Kubernetes. Frontend is developed in NextJS while backend is develed in Dotnet Core 8.</p>
          
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://drive.google.com/file/d/174ZF7Nbf2AcY3HYdnYSidmed3xr787li/view?usp=drive_link"
              target="_blank"
            >
              Video
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/AmarTauqeer/DotnetCore-Microservices-Kafka-Kubernets"
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
                <RiRadioButtonFill className="pr-1" /> Apache Kafka
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Kubernetes (K8s)
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Minikube
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Dotnet Core C#
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Dotnet Core Entity Framework
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL Server
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextUI
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

export default DotnetCoreMicroserviceKafkaK8sApp;
