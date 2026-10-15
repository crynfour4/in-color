import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-900 justify-between select-none">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}
