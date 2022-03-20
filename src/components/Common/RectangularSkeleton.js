import React from 'react'
import { Skeleton } from '@mui/material'

export default function RectangularSkeleton({ number }) {

    let skeletons = []

    for (let i = 0; i < number; i++) {
        skeletons.push(<Skeleton variant="rectangular" width="60%" height="8vh" key={i} style={{marginBottom: "2vh"}}/>)
    }

    const renderSkeletons = (skeletons) => {
        return skeletons
    }

    return (
        <div>{renderSkeletons(skeletons)}</div>
    )
}
