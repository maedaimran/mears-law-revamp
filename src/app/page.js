import Image from "next/image";
import Containers from "./components/containers.js";
import OurValues from "./components/OurValues.js";
import CallToAction from "./components/CallToAction.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/hero";


export default function Home() {
  return (
    <div className="page">
       <section>
          <Hero />
        </section>
      <section>
        <OurValues  />
      </section>
        <section>
          <Containers />
        </section>
        <section>
        <CallToAction />
      </section>
      {/* </main> */}
    </div>
  );
}