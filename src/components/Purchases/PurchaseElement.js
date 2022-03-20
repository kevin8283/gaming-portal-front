import React from 'react'
import { TableCell, TableRow } from '@mui/material'

export default function PurchaseElement({ datas }) {

  const getTotalPurchase = (games) => {
    let sum = 0

    games.forEach(game => {
      sum = sum + game.price
    })

    return sum
  }

  const formattedDate = new Date(datas.date).toLocaleDateString()
  const clientDatas = datas.client
  const totalPurchase = getTotalPurchase(datas.games)

  return (
    <TableRow>
      <TableCell>{formattedDate}</TableCell>
      <TableCell>{datas.client_id}</TableCell>
      <TableCell>{clientDatas.name}</TableCell>
      <TableCell>{datas.games_id.length}</TableCell>
      <TableCell>{`${totalPurchase} Ar`}</TableCell>
    </TableRow>
  )
}
