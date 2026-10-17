import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Team from "./components/team/Team";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-900 justify-between select-none">
      <Hero/>
      <Team/>
    </div>
  );
}
