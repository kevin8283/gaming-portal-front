import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home/Home"
import GameContainer from "./components/Games/GameContainer"
import PurchaseContainer from "./components/Purchases/PurchaseContainer"
import ClientContainer from "./components/Clients/ClientContainer"
import Navbar from './components/Navbar/Navbar'
import "./App.css"


export default function App() {
  return (
    <main className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="games" element={<GameContainer />} />
            <Route path="purchases" element={<PurchaseContainer />} />
            <Route path="clients" element={<ClientContainer />} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}
