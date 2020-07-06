import React from 'react'
import { Link } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import { SubFooterWrap } from './style'

const SubFooter = () => {
  return (
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
          <button>
            get in touch
            <span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
          </button>
        </Col>
      </Row>
    </SubFooterWrap>
  )
}

export default SubFooter
