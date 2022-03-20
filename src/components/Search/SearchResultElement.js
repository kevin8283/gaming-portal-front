import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SportsEsports, Person } from '@mui/icons-material'

export default function SearchResultElement({ datas }) {

    const primaryText = datas.title ? `${datas.title} (${datas.size} go)` : datas.name

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {datas.title ? <SportsEsports /> : <Person />}
                </ListItemIcon>
                <ListItemText primary={primaryText} />
            </ListItemButton>
        </ListItem>
    )
}
