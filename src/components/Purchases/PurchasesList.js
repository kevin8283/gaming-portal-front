import React from 'react'
import PurchaseElement from './PurchaseElement'
import { Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import RectangularSkeleton from '../Common/RectangularSkeleton'
import Error from '../Common/Error'

export default function PurchasesList({ purchases, isLoading, isError }) {

    const renderPurchases = (purchases) => {
        if (isLoading) {
            return <RectangularSkeleton number={5}/>
        }
        else {
            if (isError) {
                return <Error message="Erreur réseau - Veuillez vérifier votre connexion" />
            }
            return purchases.map((item, index) => {
                return <PurchaseElement datas={item} key={index} />
            })
        }
    }

    return (
        <div className="purchases-list">
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
        </div>
    )
}
