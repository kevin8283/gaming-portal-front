import React from 'react'
import { ListItem, ListItemButton, Checkbox, ListItemText } from '@mui/material'

export default function NewPurchaseGameElement({ datas, checked }) {

    const handleClick = (id) => {
        alert(id)
    }

    return (
        <ListItem disablePadding>
            <ListItemButton dense onClick={() => {handleClick(datas._id)}}>
                <Checkbox
                    edge="start"
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText>{datas.title}</ListItemText>
            </ListItemButton>
        </ListItem>
    )
}
