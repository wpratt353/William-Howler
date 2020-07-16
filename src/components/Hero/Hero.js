import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import {
  HeroWrap,
  HeroLeft,
  HeroRight,
  StyledBackground,
  StyledArrows,
} from './style'
import CTA from '../CTA'

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
            <HeroLeft md={12} lg={6}>
              <div>
                <h1>
                  <span>Metal Inspired</span>
                  <span>Furniture</span>
                </h1>
                <CTA border="#afa88c">what we do</CTA>
              </div>
            </HeroLeft>

            <HeroRight md={12} lg={6}>
              <CTA background="white" mobile="none">
                get in touch
              </CTA>
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
                  <span>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </span>
                </button>
                <button className="button" onClick={this.next}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </StyledArrows>
            </HeroRight>
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
