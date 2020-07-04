import React, { useState } from "react"

import Nav from '../Nav'
import Logo from './Logo'
import { HeaderWrap } from './style'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <HeaderWrap>
        <Logo />
      </HeaderWrap>

      <Nav />
    </>
  )
}

export default Header
