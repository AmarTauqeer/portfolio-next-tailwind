import Image from "next/image";
import React from "react";
import MERN from "../public/MERN-Stack.png";
import KG from "../public/kg.jpg";
import ASP from "../public/asp.png";
import DJ from "../public/dj-react.jpg";
import Csharp from "../public/Csharp1.png";
import SpringReact from "../public/Spring-Boot-React.png";
import FlaskFastReact from "../public/flask-fastapi-react-bootstrap.jpg";
import FlaskKgReact from "../public/flask-swagger-react.jpg";
import SpringReactMySQLTailwind from "../public/spring-next-react-mysql-tailwind.png";
import Inventory from "../public/inventory.jpg";
import SpringMicroservices from "../public/spring-microservices.jpg";
import BlogApp from "../public/blog-app.jpg";
import AWSEC2 from "../public/aws-ec2-deploy.jpg";
import AZUREDOTNET from "../public/dotnetcore.jpg";
import DotnetCoreTailwind from "../public/dotnetcorereacttailwind.jpg";
import DotnetCoreNextEcommerce from "../public/dotnetcore-next-ecommerce.jpg";
import DotnetCoreMicroserviceK8s from "../public/DotnetcoreMicroserviceK8s.jpg";
import DotnetCoreAngularAuthenticationAuthorization from "../public/dotnetangular.jpg";

import Link from "next/link";

const Projects = () => {
  return (
    <div id="project" className="w-full p-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DotnetCoreAngularAuthenticationAuthorization}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Permission Management Application
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Dotnet Core, Dotnet Core Entityframework, Angular CLI 19, NGX
                Toaster, STATE MANAGEMENT-Angular Signals, and DESIGN- Material
                UI, Tailwind, SQL Server
              </p>
              <Link href="/dotnetcore-angular-authentication-authorization">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DotnetCoreMicroserviceK8s}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Dotnetcore Microservicess with Kafka in K8s Application
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Dotnet Core, Dotnet Core Entityframework, Kafka, K8s, Minikube,
                NextJS, NextUI, ReactJS, Tailwind, SQL Server
              </p>
              <Link href="/dotnetcore-micro-k8s">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DotnetCoreNextEcommerce}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Dotnetcore and NextJS E-commerce Application
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Dotnet Core, Dotnet Core Entityframework, Dapper, NextJS,
                NextUI, ReactJS, Tailwind, SQL Server
              </p>
              <Link href="/dotnetcore-next-ecommerce">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DotnetCoreTailwind}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Gondal Industry Inventory Management Dashboard
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Dotnet Core, Dotnet Core Entityframework, NextJS, ReactJS,
                Tailwind, SQL Server
              </p>
              <Link href="/dotnetcore-gondal-inventory">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={AZUREDOTNET}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Employee Management Application on Microsoft Azure
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Dotnet Core, Dotnet Core Entityframework, NextJS, ReactJS,
                Tailwind, SQL Server, Azure SQL Database
              </p>
              <Link href="/azure-employee-management">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={AWSEC2}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Django Next Todo on AWS
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Django, Django rest framework, NextJS, ReactJS, Tailwind,
                SQLite, AWS EC2
              </p>
              <Link href="/aws-todo">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={BlogApp}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Blog Application
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Django, Django rest framework, NextJS, ReactJS, Tailwind, SQLite
              </p>
              <Link href="/blog-application">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={Inventory}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Inventory Management System
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Django, Django rest framework, NextJS, ReactJS, Tailwind, MySQL
              </p>
              <Link href="/django-inventory">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={SpringReactMySQLTailwind}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Blog Application
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Java Spring Boot, NextJS, ReactJS, Tailwind, MySQL
              </p>
              <Link href="/spring-blog">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={SpringMicroservices}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Spring Boot 3 Plus Microservices
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                Spring Boot, NextJS, ReactJS, Bootstrap, MySQL, Zipkin, Eureka
                Server, Eureka Client, API Gateway
              </p>
              <Link href="/spring-microservices">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={FlaskFastReact}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                CRUD DEMO
              </h3>
              <p className="pb-4 pt-2 text-white text-center uppercase">
                FastAPI, bootstrap, and React
              </p>
              <Link href="/crud-demo">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={FlaskKgReact}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Data Sharing (GDPR) Contracts
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Flask, Knowledge Graph, GraphDB, SPARQL, Swagger, bootstrap, and
                React
              </p>
              <Link href="/data-sharing">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={FlaskKgReact}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Data Sharing (GDPR) Contracts with SHACL
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Flask, Knowledge Graph, GraphDB, SPARQL, SHACL, Swagger,
                bootstrap, and React
              </p>
              <Link href="/data-sharing-shacl">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DJ}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Ecommerce
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Django, SQLite, React, and Bootstrap.
              </p>
              <Link href="/ecommerce">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={SpringReact}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Employee Management
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Spring, MySql, React, and Bootstrap.
              </p>
              <Link href="/employee-management">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DJ}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Professional Dashboard
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Django, React and Material UI.
              </p>
              <Link href="/professional-dashboard">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DJ}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Admin Dashboard (with Bootstrap)
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Django, MongoDB, React, Redux and Bootstrap.
              </p>
              <Link href="/admin-dashboard-bootstrap">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DJ}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                React Django MongoDB CRUD APP
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                CRUD operation using Django, React, and MongoDB.
              </p>
              <Link href="/react-django-mongodb-crud-app">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={DJ}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Admin Dashboard
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Django, MongoDB, React, Redux and Material UI.
              </p>
              <Link href="/admin-dashboard-material-redux">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={MERN}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                MERN Stack Redux CRUD
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React, Redux and MongoDB CRUD oprations.
              </p>
              <Link href="/mern-redux">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={MERN}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                MERN Full Stack Application
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Order management system using React, Express, Node, MongoDB and
                Bootstrap.
              </p>
              <Link href="/mern-full-stack">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={ASP}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Shoppin Cart PayPal
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                E-Commerce application using ASP.NET MVC5 and MSSQLSERVER.
              </p>
              <Link href="/shopping-cart-paypal">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={Csharp}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Window Desktop Application
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Windows desktop application using C#, MSSQL SERVER, and Crystal
                Reports.
              </p>
              <Link href="/windo-desktop-app">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={KG}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center uppercase">
                Graph Validator
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Knowledge Graph validation using React, GraphDB and SPARQL.
              </p>
              <Link href="/graph-validator">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
