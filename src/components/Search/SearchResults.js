import React from 'react'
import { List } from '@mui/material'
import SearchResultElement from './SearchResultElement'
import RectangularSkeleton from '../Common/RectangularSkeleton'
import Error from '../Common/Error'

export default function SearchResults({ searchResults, isLoading, isError }) {
  const errorMessage = "Erreur réseau - Veuillez vérifier votre connexion"

  const renderResults = (datas) => {
    if (isLoading) {
      return <RectangularSkeleton number={5}/>
    }
    return datas.map((item, index) => {
      return <SearchResultElement datas={item} key={index}/>
    })
  }

  return (
    <List>
      {isError ? <Error message={errorMessage}/> : renderResults(searchResults)}
    </List>
  )
}
