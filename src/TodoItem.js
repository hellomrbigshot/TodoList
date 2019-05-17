import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.todo !== this.props.todo) {
      return true
    }
    return false
  }
  render() {
    const { todo } = this.props
    return (
      <div onClick={this.handleItemClick}>
        {todo}
      </div>
    )
  }
  handleItemClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}

TodoItem.defaultProps = {
}
export default TodoItem
