import React from "react";
import Image from "next/image";
import html  from "../public/html.png"
import css from "../public/css.png"
import javascript from "../public/javascript.png"
import mongo from "../public/mongo.png"
import next from "../public/nextjs.png"
import node from "../public/node.png"
import tailwind from "../public/tailwind.png"
import react from "../public/react.png"
import bootstrap from "../public/bootstrap.png"
import knowledgegraph from "../public/knowledge-graph.png"
import sparql from "../public/sparql.png"
import flask from "../public/flask.png"
import django from "../public/django.png"
import python from "../public/python.png"
import mysql from "../public/mysql.png"
import github1 from "../public/github1.png"




const Skills = () => {
  return (
    <div id='skill' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="p-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={html}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={css}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={javascript}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={mongo}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MONGO</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={next}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={node}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODEJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={tailwind}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={react}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={bootstrap}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>BOOTSTRAP</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={knowledgegraph}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>KNOWLEDGE GRAPHS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={sparql}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SPARQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={flask}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FLASK</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={django}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>DJANGO</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={python}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PYTHON</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={mysql}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MYSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  className="rounded-xl"
                  src={github1}
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
