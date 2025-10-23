import Image from "next/image";
import Containers from "./components/containers.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/hero";


export default function Home() {
  return (
    <div className="page">
       <section>
          <Hero />
        </section>
      {/* <main className="main"> */}
        <section>
          <Containers />
        </section>
      {/* </main> */}
    </div>
  );
}