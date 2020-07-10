import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { AboutWrap, StyledBackground } from './style'

class About extends Component {
  render() {
    const { data } = this.props
    return (
      <AboutWrap>
        <Container>
          <Row>
            <Col sm={12} lg={6}>
              NU Creative - London
              <StyledBackground
                fadeIn
                Tag="div"
                className="about-image"
                fluid={data.about1.childImageSharp.fluid}
              />
            </Col>
            <Col sm={12} lg={6}>
              Just a COVID screen? How about a long term solution.
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6}>
              test
            </Col>
            <Col sm={12} lg={6}>
              test
            </Col>
          </Row>
        </Container>
      </AboutWrap>
    )
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query About {
        about1: file(relativePath: { eq: "about/1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => <About data={data} {...props} />}
  />
)
