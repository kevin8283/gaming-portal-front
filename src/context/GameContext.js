import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const GameContext = createContext()

export default function GameContextProvider({ children }) {

    const [games, setGames] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/games")
        .then(response => {
          setGames(response.data)
          setLoading(false)
          setError(false)
        })
        .catch(e => {
          setError(true)
          setLoading(false)
        })
    }, [])

    
    return (
        <GameContext.Provider value={{games, isLoading, isError}}>
            {children}
        </GameContext.Provider>
    )
}
