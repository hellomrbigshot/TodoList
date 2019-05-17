import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './transition.css'
class Transition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          unmountOnExit
          classNames="fade"
          onEntered={(el) => {el.style.color = 'blue'}}
          appear={true}
        >
          <div className={this.state.show ? 'show' : 'hide'}>hello</div>  
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
        <TransitionGroup>
          {
            this.state.list.map((item, key) => (
              <CSSTransition
                classNames="fade"
                unmountOnExit
                timeout={1000}
                onEntered={(el => {el.style.color = 'blue'})}
                key={key}
                appear={true}
              >
                <div>{item}</div>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>add</button>
      </Fragment>
    )
  }
  handleToggle() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }
  handleAddItem() {
    this.setState((prevState) => ({
      list: ['item', ...prevState.list]
    }))
  }
}
export default Transition