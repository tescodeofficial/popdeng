import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [moodengImg, setMoodengImg] = useState("1.png")
  const [animationClass, setAnimationClass] = useState("")

  const handleMouseDown = () => {
    setMoodengImg("2.png")

    // Play sound
    const audio = new Audio("/pop.wav")
    audio.play().catch((error) => {
      console.log(error);
    })

    // Animation class .rot-1 to .rot-5
    const randomRotation = Math.floor(Math.random() * 5) + 1
    setAnimationClass(`rot-${randomRotation}`)

    // Clear
    setTimeout(() => {
      setAnimationClass("")
    }, 50);

  }

  const handleMouseUp = () => {
    setCount(count + 1)
    setMoodengImg("1.png")
  }

  return (
    <>
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url('/bg-min.jpg')` }}>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className="" style={{ touchAction: "manipulation" }}>
          {/* Logo */}
          <div className="flex justify-center items-center p-4">
            <h1 className="brand-text text-6xl font-bold relative inline-block">
              <span className="text-[#fe82a5] relative z-10">POPDENG</span>
              <span className="absolute inset-0 text-white pointer-events-none" style={{ WebkitTextStroke: "7px white" }}>POPDENG</span>
            </h1>
          </div>

          {/* Counter */}
          <div className="flex justify-center">
            <div className="text-4xl font-bold mb-4 text-white stroke-black">
              <h1 className={`pop-click ${animationClass}`}>{count}</h1>
            </div>
          </div>

          {/* Img */}
          <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)]">
            <img src={moodengImg} alt="moodeng" draggable="false" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
