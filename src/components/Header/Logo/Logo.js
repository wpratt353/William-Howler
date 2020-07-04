import React from 'react'

import { LogoWrap } from './style'

class Logo extends React.Component {
  componentDidMount() {
    var scrollpos = window.scrollY
    var logo = document.querySelector('.logo')

    function add_class_on_scroll() {
      logo.classList.add('logo-small')
    }
    function remove_class_on_scroll() {
      logo.classList.remove('logo-small')
    }

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY

      if (scrollpos > 1) {
        add_class_on_scroll()
      } else {
        remove_class_on_scroll()
      }
    })
  }

  render() {
    return (
      <LogoWrap>
        <div className="logo">
          <div>
            William<span>Howler</span>
          </div>
          <div>
            W<span>H</span>
          </div>
        </div>
      </LogoWrap>
    )
  }
}

export default Logo
