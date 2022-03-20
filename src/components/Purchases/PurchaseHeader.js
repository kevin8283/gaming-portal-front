import React from 'react'
import { Button } from '@mui/material'
import { AddCircle } from '@mui/icons-material'

export default function PurchaseHeader() {
  return (
    <header className="game-header">
      <div className="titles">
        <div className="header-title">Liste des achats</div>
        <div className="header-secondary-title">Liste des achats effectués, triés par date</div>
      </div>
      <div className="action-buttons">
        <Button variant="contained" color="success">
          <AddCircle/>
          <span className="button-text">Nouvelle transaction</span>
        </Button>
      </div>
    </header>
  )
}
