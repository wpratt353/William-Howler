import React from 'react'

import { NavWrap, NavFlex, MenuButton } from './style'

class Nav extends React.Component {
  componentDidMount() {
    var scrollpos = window.scrollY
    var nav = document.querySelector('.nav')

    function add_class_on_scroll() {
      nav.classList.add('nav-back-to-top')
    }
    function remove_class_on_scroll() {
      nav.classList.remove('nav-back-to-top')
    }

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY

      if (scrollpos > 500) {
        add_class_on_scroll()
      } else {
        remove_class_on_scroll()
      }
    })
  }

  render() {
    return (
      <NavWrap>
        <NavFlex>
          <MenuButton href="#">
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
          <nav className="nav">
            <div>
              Back to top<span>-></span>
            </div>
            <div>
              <a href="#">Fb</a>
              <a href="#">Tw</a>
              <a href="#">In</a>
              <a href="#">Li</a>
            </div>
          </nav>
        </NavFlex>
      </NavWrap>
    )
  }
}

/* const Nav = () => {
  return (
    
  )
} */

export default Nav
