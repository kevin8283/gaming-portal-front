import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import SearchHeader from './SearchHeader'
import SearchBody from './SearchBody'

export default function Search() {

    const [filter, setFilter] = useState("all")

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div className="outlet">
            <Scrollbars style={{ width: "100%", height: "100%" }}>
                <SearchHeader setFilter={handleFilterChange} filterState={filter} />
                <SearchBody filterState={filter} />
            </Scrollbars>
        </div>
    )
}
