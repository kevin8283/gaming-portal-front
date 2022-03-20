import React from 'react'
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

export default function SearchFilter({ setFilter, filterState }) {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="filter">Filtre</InputLabel>
                <Select
                    labelId="filter"
                    id="filter"
                    value={filterState}
                    label="Filtre"
                    onChange={setFilter}
                >
                    <MenuItem value="all">Tout</MenuItem>
                    <MenuItem value="games">Jeux</MenuItem>
                    <MenuItem value="clients">Clients</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
