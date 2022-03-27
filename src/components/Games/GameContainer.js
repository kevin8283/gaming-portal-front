import React, { useEffect, useState } from 'react'
import GameHeader from './GameHeader'
import GameListContainer from './GameListContainer'
import Error from '../Common/Error'
import Loader from '../Common/Loader'

import fetchDatas from '../../modules/fetchDatas'

export default function GameContainer() {

  const [games, setGames] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [networkError, setError] = useState(false)

  const renderGameList = () => {
    if (isLoading) {
      return <Loader/>
    }
    else {
      if (networkError) {
        return <Error message="Erreur réseau - Veuillez vérifier votre connexion"/>
      }
      return <GameListContainer games={games}/>
    }
  }

  const useEffectCleanFunction = () => {
    setGames([])
  }

  const useEffectCallback = () => {
      fetchDatas("http://localhost:8000/games")
        .then(response => {
          localStorage.setItem("games", [...response.data])
          setGames(response.data)
          setLoading(false)
          setError(false)
        })
        .catch(e => {
          setError(true)
          setLoading(false)
        })

        return useEffectCleanFunction
  }

  useEffect(useEffectCallback, [])

  return (
    <main className="outlet">
      <GameHeader/>
      {renderGameList()}
    </main>
  )
}
