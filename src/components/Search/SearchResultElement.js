import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SportsEsports, Person } from '@mui/icons-material'

export default function SearchResultElement({ datas }) {

    const primaryText = datas.title ? `${datas.title} (${datas.size} go)` : datas.name

    const handleClick = () => {
       
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {datas.title ? <SportsEsports /> : <Person />}
                </ListItemIcon>
                <ListItemText primary={primaryText} />
            </ListItemButton>
        </ListItem>
    )
}
