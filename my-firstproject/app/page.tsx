import Image from "next/image";
import Hero from "./Component/hero";
import Contect from "./Component/Contact";
import Project from "./Component/Project";
import About from "./Component/About";
import Skills from "./Component/Skills";

export default function Home() {
  return (
   
   <div>
     <Hero />
    <About />
    <Skills/>
    < Project/>
    <Contect />
   </div>  
  );
}
 
