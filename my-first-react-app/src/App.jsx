import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="page">
      <h1 id="introduction">Introduction</h1>

      <p className="intro-text">
        Hello, my name is Adam He. I am a third-year Computer Engineering student
        at the University of Virginia.
      </p>

      <h2>Hometown</h2>
      <p className="hometown">
        I was born in China and moved to Las Vegas when I was 16.
      </p>

      <a
        href="https://maps.app.goo.gl/PXC82PaMMDrvHZgQ6"
        target="_blank"
        rel="noreferrer"
      >
        This is my hometown on Google Maps
      </a>

      <h3>Favorite Food</h3>
      <p style={{ color: 'red' }}>My favorite food is hot pot.</p>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TuvvmVq0Se7YsZpasLZ6a-6NZQPn7jh3fQ&s" alt="Hot Pot" width="300" />
    </div>
  )
}

export default App
