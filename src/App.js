import React, { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  function handleCount(e) {
    e.preventDefault()
    setCount(count + 1)
  }

  const Click = () => {
    const [Click, setClicks] = useState("Click")
    return <p onClicks={() => setClicks("Click")}>{Click}</p>
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleCount} id="like">
          {count}
        </button>
        <p>Clicks</p>
      </header>
    </div>
  )
}

export default App
