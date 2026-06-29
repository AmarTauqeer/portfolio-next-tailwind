import React from "react";
import Inventory from "../public/inventory.jpg";
import atecommerce from "../public/atecommerce.jpg"
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ATECommerceSolution = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={atecommerce}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 uppercase">AT-E-Commerce-Solution</h2>
          <h3>
            FastAPI, Stripe, Next JS, React JS, React PDF, Tailwind CSS, Shadcn, TypeScript, and PostgreSQL
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
            The application is developed with FastAPI, Stripe, React JS, React PDF, PostgreSQL, NextJS, TypeScript, Tailwind CSS, Shadcn, and has
            the following features:{" "}
          </p>
          <ul className="list-disc">
            <li>Role-based authentication and authorization using JWT, HttpOnly Cookies, and OTP through email.</li>
            <li>Responsive UI including shop, shopping cart, and profile.</li>
            <li>Integration of Stripe payment gateway.</li>
            <li>Admin Panel provides the management of categories, products, roles, resources, and customer orders.</li>
            <li>Facilitate with user permissions to resources such as customer orders, products, etc,.</li>
            <li>Provides the output in the form of reports such as list of categories, list of products, customers orders (single and in between dates)</li>
            <li>API documentation using swagger</li>
            <li>
              Images upload store and reterive with other data from the server.
            </li>
            <li>Single page application.</li>
            <li>
              Search/filteration based on category, products, customer orders, shopping cart, etc,. 
            </li>
          </ul>
          <button className="px-8 py-2 mt-4 mr-8">
            <a
              href="https://1drv.ms/f/c/7e2cd935019f4cd8/IgB9b0a5h8mORIx9WCdbPsTYAddOw8g61v7wk845kG2BSwE?e=hNUung"
              target="_blank"
            >
              Demo
            </a>
          </button>
          <button className="px-8 py-2 mt-4">
            <a
              href="https://github.com/AmarTauqeer/AT-E-Commerce-Solution"
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
                <RiRadioButtonFill className="pr-1" /> FastAPI
              </p>
               <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe
              </p>
               <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React, React PDF
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
               <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Shadcn
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

export default ATECommerceSolution;
