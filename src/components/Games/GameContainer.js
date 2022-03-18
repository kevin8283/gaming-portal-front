import React, { useEffect, useState } from 'react'
import GameHeader from './GameHeader'
import GameListContainer from './GameListContainer'
import GameOptionSelector from './GameOptionSelector'
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
  }

  const useEffectCleanFunction = () => {
    setGames([])
  }

  useEffect(useEffectCallback, [], useEffectCleanFunction)

  return (
    <main className="outlet">
      <GameHeader/>
      <GameOptionSelector/>
      {renderGameList()}
    </main>
  )
}
