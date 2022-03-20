import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

export default function SearchBar({ filterState, handleSubmit }) {

  const [text, setText] = useState("")

  const handleTextChange = (event) => {
      setText(event.target.value)
  }

  let textLabel = ""

  if (filterState === "all") {
      textLabel = "Rechercher"
  }
  else if (filterState === "games") {
      textLabel = "Rechercher un jeu"
  }
  else if (filterState === "clients") {
    textLabel = "Rechercher un client"
  }

  return (
    <Box sx={{ minWidth: 240 }} className="search-box">
        <TextField 
          variant="outlined" 
          label={textLabel} 
          value={text} 
          onChange={handleTextChange} 
        />
        <div className="go-button">
          <Button onClick={() => {handleSubmit(text)}} variant="contained">
              Go
          </Button>
        </div>
    </Box>
  )
}
