import BoxSpinner from '@/components/ui/BoxSpinner'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import React from 'react'

function loading() {
  return (
    <>
      {/* <BoxSpinner></BoxSpinner> */}
      <LoadingSpinner></LoadingSpinner>
    </>
  )
}

export default loading