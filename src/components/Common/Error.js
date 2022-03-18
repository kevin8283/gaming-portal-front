import React from 'react'
import { Alert } from '@mui/material'

export default function Error({message}) {
  return (
      <div className="common-container">
        <Alert severity="error" className="error">{message}</Alert>
      </div>
  )
}
