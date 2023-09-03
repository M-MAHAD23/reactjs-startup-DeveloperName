import './App.css'
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';
import techOverflow from './assets/techOverflow.png'
import useWindowSize from 'react-use/lib/useWindowSize';

function App() {
  const [count, setCount] = useState(0)
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false); // Set showConfetti to false after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
    <>
      <div className={`${showConfetti ? 'visible' : 'hidden'}`} style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}>
        <Confetti
          width={width}
          height={height}
          className="confetti"
        />
      </div>
      <div className="container">
        <div>
          <a href="https://techoverflow.io/" target="_blank" rel="noreferrer">
            <img src={techOverflow} className="logo" alt="TO logo" />
          </a>
        </div>
        <h1>Welcome to TechOverflow 😎</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <h2 className="read-the-docs">
          🚀 Let the Journey begin 🚀
        </h2>
      </div>
    </>
  )
}

export default App
