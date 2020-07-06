import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import SubFooter from '../components/Footer/SubFooter'
import Footer from '../components/Footer'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="siteContent">{children}</div>
      <SubFooter />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
