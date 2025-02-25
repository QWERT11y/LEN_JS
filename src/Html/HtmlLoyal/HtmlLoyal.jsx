import React from 'react'
import HtmlLeft from './HtmlLeft'
import HtmlHeader from './htmlHeader'

const HtmlLoyal = ({children}) => {
  return (
    <>
    <HtmlHeader/>
    {children}
      <HtmlLeft/>
    </>
  )
}

export default HtmlLoyal
