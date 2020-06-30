import React from 'react'

import './Footer.styles.scss'

import CopyrightSymbol from '../../assets/icons/icons8-copyright-24.png'

const Footer = () => {

  function getYear() {
    const date = new Date()
    return date.getFullYear()
  }
  
  return (
    <div className="footer">
      <img src={CopyrightSymbol} alt="Copyright Symbol" className="copy" />
      {" " + getYear() + " "}
      Sea Salt + Sawdust
    </div>
  )
}

export default Footer