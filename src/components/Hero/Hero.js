import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { HeroWrap, StyledBackground, StyledArrows } from './style'

class Hero extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }

  render() {
    const { data } = this.props
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <HeroWrap>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              1
            </Col>

            <Col xs={12} md={6}>
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                <StyledBackground
                  fadeIn
                  Tag="div"
                  className="hero-image"
                  fluid={data.hero1.childImageSharp.fluid}
                />
                <StyledBackground
                  fadeIn
                  Tag="div"
                  className="hero-image"
                  fluid={data.hero2.childImageSharp.fluid}
                />
                <StyledBackground
                  fadeIn
                  Tag="div"
                  className="hero-image"
                  fluid={data.hero3.childImageSharp.fluid}
                />
              </Slider>

              <StyledArrows>
                <button className="button" onClick={this.previous}>
                  Previous
                </button>
                <button className="button" onClick={this.next}>
                  Next
                </button>
              </StyledArrows>
            </Col>
          </Row>
        </Container>
      </HeroWrap>
    )
  }
}
export default (props) => (
  <StaticQuery
    query={graphql`
      query Hero {
        hero1: file(relativePath: { eq: "hero/1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        hero2: file(relativePath: { eq: "hero/2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        hero3: file(relativePath: { eq: "hero/3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={(data) => <Hero data={data} {...props} />}
  />
)
