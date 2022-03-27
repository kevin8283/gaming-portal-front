import React, { useContext } from 'react'
import GameHeader from './GameHeader'
import GameListContainer from './GameListContainer'
import Error from '../Common/Error'
import Loader from '../Common/Loader'
import { GameContext } from '../../context/GameContext'

export default function GameContainer() {

  const {games, isLoading, isError} = useContext(GameContext)

  const renderGameList = () => {
    if (isLoading) {
      return <Loader/>
    }
    else {
      if (isError) {
        return <Error message="Erreur réseau - Veuillez vérifier votre connexion"/>
      }
      return <GameListContainer games={games}/>
    }
  }

  return (
    <main className="outlet">
      <GameHeader/>
      {renderGameList()}
    </main>
  )
}
