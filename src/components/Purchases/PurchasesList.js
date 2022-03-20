import React from 'react'
import PurchaseElement from './PurchaseElement'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material'

export default function PurchasesList({ purchases, isLoading, isError }) {

    const renderPurchases = (purchases) => {
        return purchases.map((item, index) => {
            return <PurchaseElement datas={item} key={index} />
        })
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>ID du client</TableCell>
                    <TableCell>Nom du client</TableCell>
                    <TableCell>Nombre de jeux achetés</TableCell>
                    <TableCell>Total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {renderPurchases(purchases)}
            </TableBody>
        </Table>
    )
}
