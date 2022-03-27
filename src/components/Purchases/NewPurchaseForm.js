import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, TextField, List, Button } from '@mui/material'
import NewPurchaseGameElement from './NewPurchaseGameElement'

export default function NewPurchaseForm({ clients, games }) {

  const [clientID, setClientID] = useState("")
  const [game, setGame] = useState("")
  const [checkedGames, setCheckedGames] = useState([])
  const [keyboardPressed, setKeyboardState] = useState(false)

  const handleIDChange = (event) => {
    setClientID(event.target.value)
  }

  const handleGameChange = (event) => {
    setKeyboardState(false)
    setGame(event.target.value)
  }

  const handleEnterKeyboardPress = (event) => {
      if (event.keyCode === 13) {
        setKeyboardState(true)
      }
  }

  const renderClients = (clients) => {
    return clients.map((item, index) => {
      return <MenuItem value={item._id} key={index}>{item.name}</MenuItem>
    })
  }

  const renderGames = (games) => {
    if (game === "") {
      return []
    }
    else {
      const regex = new RegExp(`${game}`, "i")

      const filteredGames = games.filter(game => regex.test(game.title))
      return filteredGames.map((item, index) => {
        return <NewPurchaseGameElement datas={item} key={index} checked={false}/>
      })
    }
  }

  return (
    <div className="new-purchase-form">
      <FormControl fullWidth style={{marginBottom: 50}}>
          <InputLabel id="client">Client</InputLabel>
          <Select
            labelId="client"
            id="client"
            value={clientID}
            label="Client"
            onChange={handleIDChange}
          >
            {renderClients(clients)}
          </Select>
      </FormControl>
      <FormControl fullWidth style={{marginBottom: 50}}>
          <TextField
            value={game}
            onChange={handleGameChange}
            variant="outlined"
            label="Titre du jeu"
            onKeyUp={handleEnterKeyboardPress}
          />
        <span className="purchase-button-container">
          <Button variant="contained" style={{width: "20%"}}>
            Encaisser
          </Button>
        </span>
        <List style={{padding: 50}}>
          <div className="new-purchase-game-list">
            {keyboardPressed ? renderGames(games) : []}
          </div>
        </List>
      </FormControl>
    </div>
  )
}
