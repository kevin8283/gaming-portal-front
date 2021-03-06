import React from 'react'
import { CircularProgress } from '@mui/material'

export default function Loader() {
  return (
    <div className="common-container">
      <CircularProgress color="success" className="loader"/>
    </div>
  )
}
