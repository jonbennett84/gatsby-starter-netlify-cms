import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-primary">
        <div className="content has-text-centered">
          Can't find what you're looking for? Call our help desk on 0800 975 8080 or email <a href="mattercentre@globalx.co">mattercentre@globalx.co</a>
        </div>      
      
      </footer>
    )
  }
}

export default Footer
