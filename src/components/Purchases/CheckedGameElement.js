import React from 'react'
import { ListItem, ListItemButton, ListItemText } from '@mui/material'

export default function CheckedGameElement({ game }) {

    const primaryText = game.title

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemText primary={primaryText} />
            </ListItemButton>
        </ListItem>
    )
}
