import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import HomeContainer from './HomeContainer'
import HomeHeader from './HomeHeader'

export default function Home() {
  return (
    <div className="outlet">
      <Scrollbars style={{width: "100%", height: "100%"}}>
        <HomeHeader/>
        <HomeContainer/>
      </Scrollbars>
    </div>
  )
}
