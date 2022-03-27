import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const ClientContext = createContext()

export default function ClientContextProvider({ children }) {

    const [clients, setClients] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/clients')
                .then(response => {
                    setClients(response.data)
                })
                .catch(e => {
                    throw e
                })
    }, [])

    return (
        <ClientContext.Provider value={clients}>
            {children}
        </ClientContext.Provider>
    )

}

