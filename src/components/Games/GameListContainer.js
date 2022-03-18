import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

export default function GameListContainer({games}) {

    const columns = [
        {field: "title", headerName: "Titre", width: 350},
        {field: "size", headerName: "Taille (go)", width: 100},
        {field: "price", headerName: "Prix (Ariary)", width: 100},
    ]

    const rows = [...games]

    return (
        <div style={{ height: '80%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[games.length]}
            />
        </div>
    )
}
