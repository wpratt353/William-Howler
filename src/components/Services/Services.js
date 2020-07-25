import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  ServicesWrap,
  StyledSlider,
  SliderSection,
  StyledBackground,
} from './style'

import CTA from '../CTA'

class Services extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { data } = this.props
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2.2,
      slidesToScroll: 2,
      arrows: false,

      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <ServicesWrap>
        <Container>
          <Row>
            <Col className="column-left" md={12} lg={3}>
              <h4>Services</h4>
            </Col>
            <Col md={12} lg={9}>
              <StyledSlider {...settings}>
                <SliderSection>
                  <h1>3D Rendering</h1>
                  <p>
                    We can provide 3D visualisation as well as space planning.
                    Send us your idea’s, sketch or a full CAD file and we’ll
                    create a digital image for you before committing to
                    manufacture.
                  </p>
                  <CTA>read more</CTA>
                  <StyledBackground
                    fadeIn
                    Tag="div"
                    className="services-image"
                    fluid={data.services1.childImageSharp.fluid}
                  />
                </SliderSection>
                <SliderSection>
                  <h1>Site Survey</h1>
                  <p>
                    Need some extra help? We’ll come to you to discuss your
                    requirements and take measurements where needed. Then let us
                    do the rest!
                  </p>
                  <CTA>read more</CTA>
                  <StyledBackground
                    fadeIn
                    Tag="div"
                    className="services-image"
                    fluid={data.services2.childImageSharp.fluid}
                  />
                </SliderSection>
                <SliderSection>
                  <h1>Tailored Service</h1>
                  <p>
                    Throw us your pot of ideas and we’ll design your product
                    from the ground up.
                  </p>
                  <CTA>read more</CTA>
                  <StyledBackground
                    fadeIn
                    Tag="div"
                    className="services-image"
                    fluid={data.services3.childImageSharp.fluid}
                  />
                </SliderSection>
                <SliderSection>
                  <h1>Quantity</h1>
                  <p>
                    From a one-off to a full fit-out, we can support you with
                    all your metal inspired requirements.
                  </p>
                  <CTA>read more</CTA>
                  <StyledBackground
                    fadeIn
                    Tag="div"
                    fluid={data.services4.childImageSharp.fluid}
                  />
                </SliderSection>
              </StyledSlider>
            </Col>
          </Row>
        </Container>
      </ServicesWrap>
    )
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query Services {
        services1: file(relativePath: { eq: "services/1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        services2: file(relativePath: { eq: "services/2.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        services3: file(relativePath: { eq: "services/3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        services4: file(relativePath: { eq: "services/4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => <Services data={data} {...props} />}
  />
)
