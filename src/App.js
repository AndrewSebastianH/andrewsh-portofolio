import "./global.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-grow p-8 background">
        <div className="w-full min-h-full rounded-3xl shadow sm:p-8 border-black border-4 bg-white">
          <div className="font-jockey text-4xl md:-rotate-12 ">
            <p className=" md:absolute md:left-1 bottom-0 md:bottom-5 md:-translate-y-1/2">
              HELLO!
            </p>
          </div>
          {/* <div>kontol</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
