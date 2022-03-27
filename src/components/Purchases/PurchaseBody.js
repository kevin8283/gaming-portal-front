import React, { useEffect, useState } from 'react'
import PurchasesList from './PurchasesList'
import axios from 'axios'

export default function PurchaseBody() {

    const [purchases, setPurchases] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {    
        axios.get("http://localhost:8000/purchases")
            .then(response => {
                setPurchases(response.data)
                setLoading(false)
            })
            .catch(e => {
                setError(true)
                setLoading(false)
            })

        return () => {
            setPurchases([])
        }
    }, [])

    return (
        <PurchasesList purchases={purchases} isLoading={isLoading} isError={isError}/>
    )
}
