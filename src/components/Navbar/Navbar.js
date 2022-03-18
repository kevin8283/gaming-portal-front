import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-links">
            <Link to="/">Gaming Portal MG</Link>
            <Link to="/games">Jeux</Link>
            <Link to="/purchases">Achats</Link>
            <Link to="/clients">Clients</Link>
        </div>
        <Outlet/>
    </nav>
  )
}
