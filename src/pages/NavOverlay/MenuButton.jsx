import React from 'react'
import './Menu.scss'
import Final_R from '../../assets/final_r.svg'

class MenuButton extends React.Component {
  render() {
    return (
      <button id="MenuButton" onMouseDown={this.props.handleMouseDown}>
        <img src={Final_R} className="logo_mobile_image" alt="logo" />
      </button>
    )
  }
}
export default MenuButton
