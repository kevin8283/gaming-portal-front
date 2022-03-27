import React from 'react'
import { Button } from '@mui/material'
import { AddCircle } from '@mui/icons-material'
import { useNavigate } from 'react-router'

export default function PurchaseHeader() {
  
  const navigate = useNavigate()

  const handleClick = () => {
      navigate("/purchases/new")
  }

  return (
    <header className="game-header">
      <div className="titles">
        <div className="header-title">Liste des achats</div>
        <div className="header-secondary-title">Liste des achats effectués, triés par date</div>
      </div>
      <div className="action-buttons">
        <Button variant="contained" color="success" onClick={handleClick}>
          <AddCircle/>
          <span className="button-text">Nouvelle transaction</span>
        </Button>
      </div>
    </header>
  )
}
