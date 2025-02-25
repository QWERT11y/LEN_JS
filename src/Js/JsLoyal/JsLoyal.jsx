import React from 'react'
import JsHeader from './JsHeader'
import JsJeft from './JsJeft'

const JsLoyal = ({children}) => {
  return (
    <div>
      <JsHeader/>
    {children}
     <JsJeft/>
    </div>
  )
}

export default JsLoyal
