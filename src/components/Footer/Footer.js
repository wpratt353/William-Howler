import React from 'react'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Logo from '../Header/Logo'

import { FooterWrap } from './style'

const Footer = () => {
  return (
    <FooterWrap>
      <Row>
        <Col md={4}>
          <Logo />
        </Col>
        <Col md={4}>
          <Link to="#">123 456 7890</Link>
          <br />
          <Link to="#">william@howler.com</Link>
        </Col>
        <Col className="align-right" md={4}>
          -
          <br />
          <Link to="#">Designed and built by NAME_HERE</Link>
          <br />© 2020 William Joseph | All Rights Reserved
        </Col>
      </Row>
    </FooterWrap>
  )
}

export default Footer
