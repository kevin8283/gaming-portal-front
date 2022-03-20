import React from 'react'
import SearchFilter from './SearchFilter'

export default function SearchHeader({ setFilter, filterState }) {
  return (
    <header className="game-header">
      <div className="titles">
        <div className="header-title">Recherche</div>
        <div className="header-secondary-title">Filtrez les résultats en vous servant de l'outil filtre</div>
      </div>
      <div className="action-buttons">
        <SearchFilter setFilter={setFilter} filterState={filterState}/>
      </div>
    </header>
  )
}
