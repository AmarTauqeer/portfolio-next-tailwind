import Image from "next/image";
import React from "react";
import photo from "../public/profile.jpeg";
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
            I'm an experienced and professional full stack web developer having
            more than 3 years of experience in <b>full stack web development</b>{" "}
            and more than 3 years in building desktop applications. In full
            stack development, I mainly worked in backend programming languages,
            namely{" "}
            <b>
              Python (Django, Flask), .Net technologies in C# (ASP Net MVC, ASP
              NET Web API, and finally ASP NET Core)
            </b>
            , and Java Spring Boot (basics). While on the frontend side, I have
            built User Interfaces using
            <b> ReactJS, NextJS, and Angular</b>. In many projects, I was used
            to interacting with databases, such as <b>SQL Server, MySQL</b>,
            Oracle 10G, and MongoDB in NoSQL databases. Of course, I am familiar
            with{" "}
            <b>
              Docker, Kubernetes, and Apache Kafka in a cloude based environment
            </b>
            . My main ambition is to be able to work for an encouraging and
            stable company that will assist me in developing, improving, and
            obtaining the necessary skills in order to become the best engineer
            possible. My technology and tools stack is as follows:
          </p>
          <span className="px-2 text-lg font-semibold">Technology Stack:</span>
          <p className="py-2 text-gray-600 text-justify p-4">
            Semantic Web, Knowledge Graph, Ontologies, <b>Django, Flask</b>,
            Node, Express, React, Java Spring Boot, Java Spring data jpa, Java
            spring web security, MySQl, MonogoDB, Middleware, JWT, Passport,
            LocalStrategy, Local Storage,{" "}
            <b>
              Asp.net MVC, C#, Entity framework, SQL Server, SQL server
              Management Studio, Linq, SAP Crystal Reports, Database first
              approach, Code first approach.
            </b>{" "}
          </p>

          <p className="px-4 py-4 underline cursor-pointer text-blue-500">
            <Link href="/#project">Check out some of my latest projects</Link>
          </p>
        </div>
        <div className="w-full h-auto rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="flex  mt-4 rounded-full"
            src={photo}
            alt=""
            width="100px"
            height="100px"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
