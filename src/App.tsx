import { useState, useEffect } from 'react'

function App() {
  const [mountainDone, setMountainDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMountainDone(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-screen h-screen bg-gray-600 flex items-end justify-center overflow-hidden">
      <img
        src="/mountainLogo.svg"
        className={`absolute left-1/2 bottom-0 w-[420px] max-w-[90vw] -translate-x-1/2 opacity-0 animate-mountainFlyIn ${mountainDone ? 'animate-mountainImpact' : ''}`}
        style={{ animationFillMode: 'forwards' }}
        alt="Mountain Logo"
      />
      <img
        src="/textLogo.svg"
        className={`absolute left-1/2 top-0 w-[340px] max-w-[80vw] -translate-x-1/2 z-10 opacity-0 ${mountainDone ? 'animate-textFall' : ''}`}
        style={{ animationFillMode: 'forwards' }}
        alt="Text Logo"
      />
    </div>
  )
}

export default App
