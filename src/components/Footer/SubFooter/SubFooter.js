import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SubFooterWrap } from './style'
import CTA from '../../CTA'

const SubFooter = ({}) => {
  return (
    <>
      <SubFooterWrap>
        <Row>
          <Col md={4}>
            <h4>Contact</h4>
          </Col>
          <Col md={8}>
            <h1>Want to work with us?</h1>
            <h4>
              Whether you have a design or need our support, contact us now to
              discuss your project.
            </h4>
            <CTA border="#afa88c">get in touch</CTA>
          </Col>
        </Row>
      </SubFooterWrap>
    </>
  )
}

export default SubFooter
