import Image from "next/image";
import Containers from "./components/containers.js";
import PracticeAreasAlt from "./components/PracticeAreasAlt.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/hero";


export default function Home() {
  return (
    <div className="page">
      <Header />
       <section>
          <Hero />
        </section>
      {/* <main className="main"> */}
        <section>
          <Containers />
        </section>
        <section>
          <PracticeAreasAlt />
        </section>
      {/* </main> */}

      <Footer />
    </div>
  );
}