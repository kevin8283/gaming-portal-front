import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import axios from 'axios'

export default function SearchBody({ filterState }) {

  const [text, setText] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = (textValue) => {
    setText(textValue)
  }

  useEffect(() => {
    if (text !== "") {
      setLoading(true)
      axios.post("http://localhost:8000/games/search", {
        title: text,
        filter: filterState
      })
        .then(response => {
          if (response.data.length > 0) {
            setSearchResults(response.data)
            setLoading(false)
          }
          else {
            setSearchResults([])
            setLoading(false)
          }
        })
        .catch(e => {
          setLoading(false)
          setError(true)
        })
    }
  }, [text, filterState])

  return (
    <div className="search-body">
      <SearchBar filterState={filterState} handleSubmit={handleSubmit} />
      <SearchResults isError={isError} isLoading={isLoading} searchResults={searchResults} />
    </div>
  )
}
