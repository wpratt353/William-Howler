import React, { Component } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import { ServicesWrap, StyledBackground } from './style'

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
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
    }
    return (
      <ServicesWrap>
        <Container>
          <Row>
            <Col md={12} lg={4}>
              <h4>Services</h4>
            </Col>
            <Col md={12} lg={8}>
              <Slider {...settings}>
                <div className="sliderSection">
                  <h1>3D Rendering</h1>
                  <p>
                    We can provide 3D visualisation as well as space planning.
                    Send us your idea’s, sketch or a full CAD file and we’ll
                    create a digital image for you before committing to
                    manufacture.
                  </p>
                  <Link to="#">
                    read more
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </Link>
                  <StyledBackground
                    fadeIn
                    Tag="div"
                    className="services-image"
                    fluid={data.services1.childImageSharp.fluid}
                  />
                </div>
                <div className="sliderSection">
                  <h1>Site Survey</h1>
                  <p>
                    Need some extra help? We’ll come to you to discuss your
                    requirements and take measurements where needed. Then let us
                    do the rest!
                  </p>
                  <Link to="#">
                    read more
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </Link>
                  <StyledBackground
                    fadeIn
                    Tag="div"
                    className="services-image"
                    fluid={data.services2.childImageSharp.fluid}
                  />
                </div>
                <div className="sliderSection">
                  <h1>Tailored Service</h1>
                  <p>
                    Throw us your pot of ideas and we’ll design your product
                    from the ground up.
                  </p>
                  <Link to="#">
                    read more
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </Link>
                  <StyledBackground
                    fadeIn
                    Tag="div"
                    className="services-image"
                    fluid={data.services3.childImageSharp.fluid}
                  />
                </div>
                <div className="sliderSection">
                  <h1>Quantity</h1>
                  <p>
                    From a one-off to a full fit-out, we can support you with
                    all your metal inspired requirements.
                  </p>
                  <Link to="#">
                    read more
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </Link>
                  <StyledBackground
                    fadeIn
                    Tag="div"
                    className="services-image"
                    fluid={data.services4.childImageSharp.fluid}
                  />
                </div>
              </Slider>
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
