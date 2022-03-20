import React from 'react'
import PurchaseHeader from './PurchaseHeader'
import PurchaseBody from './PurchaseBody'

export default function PurchaseContainer() {
  return (
    <div className="outlet">
      <PurchaseHeader/>
      <PurchaseBody/>
    </div>
  )
}
