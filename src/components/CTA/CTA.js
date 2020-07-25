import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import { StyledCTA } from './style'

const CTA = ({ children, border, mobile, background }) => {
  return (
    <>
      <StyledCTA border={border} background={background} mobile={mobile} to="#">
        {children}
        <span>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </span>
      </StyledCTA>
    </>
  )
}

export default CTA
