import React from 'react'
import './Menu.scss'
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
