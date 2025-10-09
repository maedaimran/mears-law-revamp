import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
