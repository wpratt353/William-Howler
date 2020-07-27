import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import Popup from '../Popup'

import { StyledCTA, StyledModal } from './style'

const CTA = ({ children, border, mobile, background }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <StyledCTA
        onClick={handleShow}
        border={border}
        background={background}
        mobile={mobile}
        to="#"
      >
        {children}
        <span>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </span>
      </StyledCTA>
      <StyledModal show={show} onHide={handleClose}>
        <Popup />
      </StyledModal>
    </>
  )
}

export default CTA
