import Image from "next/image";
import Containers from "./components/containers.js"
import PracticeAreasAlt from "./components/PracticeAreasAlt.js";
import Hero from "./components/hero";
export default function Home() {
  return (
    <div className= "page">
      <main className="main">
     <section>
          <Hero />
        </section>
        <section>
          <Containers />
        </section>
      <section>
        <PracticeAreasAlt />
      </section>
      </main>
  );
}
