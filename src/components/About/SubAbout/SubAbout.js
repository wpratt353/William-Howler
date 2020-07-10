import React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SubAboutWrap } from './style'

const SubAbout = () => {
  return (
    <SubAboutWrap>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <h4>What we do</h4>
          </Col>
          <Col md={12} lg={8}>
            <h1>
              Imagined by you, made by us. We are a metal inspired commercial
              interiors manufacturer.
            </h1>
          </Col>
        </Row>
      </Container>
    </SubAboutWrap>
  )
}

export default SubAbout
