import React from 'react'
import './Menu.scss'
import Final_R from '../../assets/final_r.svg'
import { RAnimationResized } from '../../components/index'
class MenuButton extends React.Component {
  render() {
    return (
      <button id="MenuButton" onMouseDown={this.props.handleMouseDown}>
        <RAnimationResized />
      </button>
    )
  }
}
export default MenuButton
