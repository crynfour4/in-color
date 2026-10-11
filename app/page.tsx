import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 justify-between select-none">
      {/* <main className="font-sans flex flex-col m-auto items-center">
        <h1 className="text-6xl font-bold">InColor</h1>
        <p className="text-xl text-gray-700">Wkrótce start</p>
      </main> */}
      <Header/>
      <Footer/>
    </div>
  );
}
