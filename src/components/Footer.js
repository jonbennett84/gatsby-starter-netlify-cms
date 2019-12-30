import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/GX-Logo-Regal-CMYK.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '5.5em', height: '1.5em' }}
          />
        </div>      
      
      </footer>
    )
  }
}

export default Footer
