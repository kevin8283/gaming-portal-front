import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PurchaseContext = createContext()

export default function PurchaseContextProvider({ children }) {

    const [purchases, setPurchases] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/purchases')
                .then(response => {
                    setPurchases(response.data)
                    setLoading(false)
                })
                .catch(e => {
                    setError(true)
                    setLoading(false)
                })
    }, [])

    return(
        <PurchaseContext.Provider value={{purchases, isLoading, isError}}>
            {children}
        </PurchaseContext.Provider>
    )

}