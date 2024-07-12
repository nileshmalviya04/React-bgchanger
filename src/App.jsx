
import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("");
  // let [name, setName] = useState("")



  return (
    <>
      <div className="w-screen h-screen duration-200 " 
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2 ">
          <div className="fixed flex wrap justify-center bg-white px-100 py-2 rounded-xl shadow-xl shadow-black gap-3 "> 
          
          <button onClick={() => setColor("violet")} className="outline-none  px-4 py-1 rounded-full text-white shadow-lg ml-2" style={{backgroundColor: "violet" }} >Violet</button>

          <button onClick={() => setColor("indigo")} className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "indigo" }} >Indigo</button>

          <button onClick={() => setColor("blue")} className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue" }} >Blue</button>

          <button onClick={() => setColor("green")} className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green" }} >Green</button>

          <button onClick={() => setColor("yellow")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow" }} >Yellow</button>

          <button onClick={() => setColor("orange")} className="outline-none  px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "Orange" }} >Orange</button>

          <button onClick={() => setColor("red")} className="outline-none  px-4 py-1 rounded-full text-white shadow-lg mr-2" style={{backgroundColor: "red" }} >Red</button>


           </div>
        </div>
      </div>
    </>
  )
}

export default App
