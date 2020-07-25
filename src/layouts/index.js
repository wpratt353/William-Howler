import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import SubAbout from '../components/About/SubAbout'
import About from '../components/About'
import Services from '../components/Services'
import SubFooter from '../components/Footer/SubFooter'
import Footer from '../components/Footer'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="siteContent">
        {children}
        <SubAbout />
        <About />
        <Services />
        <SubFooter />
      </div>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
