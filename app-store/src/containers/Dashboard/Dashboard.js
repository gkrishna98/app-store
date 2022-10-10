import React from 'react'
import Header from '../Header'
import ProductListing from '../ProductListing'

function Dashboard() {
  return (
    <div className="flex flex-col px-8">
        <Header/>
        <ProductListing/>
    </div>
  )
}

export default Dashboard