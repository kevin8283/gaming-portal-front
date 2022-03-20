import React from 'react'
import { List } from '@mui/material'
import SearchResultElement from './SearchResultElement'
import RectangularSkeleton from '../Common/RectangularSkeleton'

export default function SearchResults({ searchResults, isLoading }) {
  
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
      {renderResults(searchResults)}
    </List>
  )
}
