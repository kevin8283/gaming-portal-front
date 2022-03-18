import React from 'react'
import { Link, Outlet } from "react-router-dom"
import { Search, SportsEsports, MonetizationOn, Person, Assessment, Info } from '@mui/icons-material'

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-links">
            <Link className="link" to="/">Gaming Portal MG</Link>
            <Link className="link" to="/search">
              <span className="icon-link"><Search/></span>
              <span className="text-link">Recherche</span>
            </Link>
            <Link className="link" to="/games">
              <span className="icon-link"><SportsEsports/></span>
              <span className="text-link">Jeux</span>
            </Link>
            <Link className="link" to="/purchases">
              <span className="icon-link"><MonetizationOn/></span>
              <span className="text-link">Achats</span>
            </Link>
            <Link className="link" to="/clients">
              <span className="icon-link"><Person/></span>
              <span className="text-link">Clients</span>
            </Link>
            <Link className="link" to="/statistics">
              <span className="icon-link"><Assessment/></span>
              <span className="text-link">Statistiques</span>
            </Link>
            <Link className="link" to="/about">
              <span className="icon-link"><Info/></span>
              <span className="text-link">A propos</span>
            </Link>
        </div>
        <Outlet/>
    </nav>
  )
}
