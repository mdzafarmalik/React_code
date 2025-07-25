import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('');


  
  return (
    <>
      <div
        className="w-full h-screen duration-1000 transition-colors"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 rounded-3xl px-4">
            
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: 'olive'}}
            >
              Olive
            </button>
             <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: 'gray'}}
            >
              Gray
            </button>
             <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-2 rounded-full text-black"
              style={{ backgroundColor: 'yellow'}}
            >
              Yellow
            </button>
             <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-2 rounded-full text-white"
              style={{ backgroundColor: 'pink'}}
            >
              Pink
            </button>
             <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-2 rounded-full text-black"
              style={{ backgroundColor: 'purple'}}
            >
              Purple
            </button>
             <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 py-2 rounded-full text-black"
              style={{ backgroundColor: 'lavender'}}
            >
              Lavender
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
