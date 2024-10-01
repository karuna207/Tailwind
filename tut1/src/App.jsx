import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <nav className="bg-purple-700">
        <ul className="px-2 py-4  flex space-x-3 justify-end">
          <li>Home</li>
          <li>Contact us</li>
          <li>About</li>
        </ul>
      </nav>

      <main className="bg-purple-100" >
        <div className=" py-40">
          <div className="text-3xl font-medium w-1/4">
            FOODIESTAN
            <p className='font-thin text-xl'>A place for all u foodies</p>
            </div>
            
              <button className="px-4 py-2 my-6 bg-purple-700 rounded-2xl hover:bg-purple-900 text-white hover:text-black">
                Buy Now
              </button>
            
         
        </div>
      </main>
    </>
  );
}

export default App;
