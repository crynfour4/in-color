import Hero from "./components/hero/Hero";
import SalonLocation from "./components/location/SalonLocation";
import Team from "./components/team/Team";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-900 justify-between select-none">
      <Hero/>
      <Team/>
      <SalonLocation/>
    </div>
  );
}
