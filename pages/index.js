import { Inter } from "next/font/google";
import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Publication from "@/components/Publication";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>portfolio</title>
        <meta name="portfolio" content="Amar Tauqeer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Resume />
      <Projects />
      <Skills />
      <Publication />
      <Contact />
    </div>
  );
}
