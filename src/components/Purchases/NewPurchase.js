import React, { useState, useEffect, useContext } from 'react'
import NewPurchaseHeader from './NewPurchaseHeader'
import NewPurchaseForm from './NewPurchaseForm'
import axios from 'axios'
import { GameContext } from '../../context/GameContext'

export default function NewPurchase() {

  const [clients, setClients] = useState([])
  const { games } = useContext(GameContext)

  useEffect(() => {
    axios.get("http://localhost:8000/clients")
      .then(response => {
        setClients(response.data)
      })
      .catch(e => {
        throw e
      })

      return () => {
        setClients([])
      }

  }, [])

  return (
    <div className="outlet">
      <NewPurchaseHeader />
      <NewPurchaseForm clients={clients} games={games} />
    </div>
  )
}
