import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-zinc-500">
      {/* <main className="font-sans flex flex-col m-auto items-center">
        <h1 className="text-6xl font-bold">InColor</h1>
        <p className="text-xl text-gray-700">Wkrótce start</p>
      </main> */}
      <Header/>
    </div>
  );
}
