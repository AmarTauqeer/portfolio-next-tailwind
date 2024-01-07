import Image from "next/image";
import React from "react";
import photo from "../public/amar.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="px-2 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 px-2 text-gray-600">Who I Am</h2>
          <p className="py-2 text-gray-600 text-justify p-4">
            Amar Tauqeer is a professional developer and researcher at
            Wageningen University & Research, the Netherlands. He has
            expreienced in Semantic Web, Knowledge Graph, Ontologies, Django,
            Flask, Node, Express, React, Java Spring Boot, Java Spring data jpa,
            Java spring web security, MySQl, MonogoDB, Middleware, JWT,
            Passport, LocalStrategy, Local Storage, JavaScript, Jquery, HTML5,
            Web Programming Skills, E-Commerce, Asp.net MVC, C#, Entity
            framework, SQL Server, SQL server Management Studio, Linq, SAP
            Crystal Reports, Database first approach, Code first approach. His
            main ambitious is to be able to work for an encouraging and stable
            company that will assist him in developing,improving, and obtaining
            the necessary skills in order to become the best engineer possible.
          </p>
          <p className="px-4 py-2 text-gray-600 underline cursor-pointer text-blue-500">
            <Link href="/#project">Check out some of my latest projects</Link>
          </p>
        </div>
        {/* <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"> */}
        <Image
          className="flex  mt-4 rounded-full"
          src={photo}
          alt=""
          width="100px"
          height="100px"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
