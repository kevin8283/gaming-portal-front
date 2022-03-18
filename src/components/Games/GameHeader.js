import React from 'react'
import { Button } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

export default function GameHeader() {
  return (
    <header className="game-header">
      <div className="titles">
        <div className="header-title">Liste des jeux disponibles</div>
        <div className="header-secondary-title">Consultez la liste des jeux disponibles, triés par taille, prix ou alphabétiquement</div>
      </div>
      <div className="action-buttons">
        <Button variant="contained" color="secondary">
          <AddCircle/>
          <span className="button-text">Nouveau jeu</span>
        </Button>
      </div>
    </header>
  )
}
