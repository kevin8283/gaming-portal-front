import React, { useState } from 'react'
import { ListItem, ListItemButton, Checkbox, ListItemText } from '@mui/material'

export default function NewPurchaseGameElement({ datas, handleCheck }) {

    const [isChecked, setChecked] = useState(false)

    const handleClick = (id) => {
        setChecked(!isChecked)
        handleCheck(id)
    }

    return (
        <ListItem disablePadding>
            <ListItemButton dense onClick={() => {handleClick(datas._id)}}>
                <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    disableRipple
                />
                <ListItemText>{datas.title}</ListItemText>
            </ListItemButton>
        </ListItem>
    )
}
