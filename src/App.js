import React, { useState } from "react"
import "./App.css"

export default function App() {
  const [count, setCount] = useState(0)
  const [grammar, setGrammar] = useState("clicks")
  function handleCount(e) {
    e.preventDefault()
    setCount(count + 1)
    setGrammar(grammar === 0 ? "click" : "clicks")
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={handleCount} id="click">
          {count} {grammar}
        </button>
      </header>
    </div>
  )
}
