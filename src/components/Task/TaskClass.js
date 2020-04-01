import React, {Component} from "react";
import PropTypes from "prop-types";
import TaskContainer from "./styles/TaskContainer";
import TaskTitle from "./styles/TaskTitle";
// This is a class equivalent of Task, as Enzyme does not support interaction with hooks features as "useState".
// For the purpose of our Enzyme test, we would like to store "complete" in the state
// instead of being a prop from the store and passed as a prop.
class TaskClass extends Component {

  state = {
    completed: false
  }

  removeSelf = () => {
    const {id, remove} = this.props
    remove(id)
  }

  completeSelf = () => {
    const {completed} = this.state
    this.setState({completed: !completed})
  }

  render() {
    const {title} = this.props
    const {completed} = this.state

    return <TaskContainer completed={completed}>
      <TaskTitle onClick={this.completeSelf}>{title}</TaskTitle>
      <button onClick={this.removeSelf} data-test='remove-button-task-test'>X</button>
    </TaskContainer>
  }
}

TaskClass.propTypes = {
  complete: PropTypes.func,
  completed: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  remove: PropTypes.func,
}

export default TaskClass