import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home/Home"
import GameContainer from "./components/Games/GameContainer"
import PurchaseContainer from "./components/Purchases/Purchase/PurchaseContainer"
import DetailedPurchase from "./components/Purchases/DetailedPurchase/DetailedPurchase"
import ClientContainer from "./components/Clients/ClientContainer"
import NewPurchase from './components/Purchases/NewPurchaseForm/NewPurchase'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import "./App.css"
import GameContextProvider from './context/GameContext'
import ClientContextProvider from './context/ClientContext'

export default function App() {

  return (
    <GameContextProvider>
      <ClientContextProvider>
          <main className="app">
            <Router>
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="search" element={<Search />} />
                  <Route path="games" element={<GameContainer />} />
                  <Route path="purchases" element={<PurchaseContainer />} />
                  <Route path="purchases/:id" element={<DetailedPurchase />}/>
                  <Route path="purchases/new" element={<NewPurchase />} />
                  <Route path="clients" element={<ClientContainer />} />
                </Route>
              </Routes>
            </Router>
          </main>
      </ClientContextProvider>
    </GameContextProvider>
  )
}
