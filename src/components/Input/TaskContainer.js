import styled from 'styled-components'
import PropTypes from 'prop-types'
import TaskTitle from './TaskTitle'

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  cursor: pointer;
  background-color: #f29400;
  border-radius: 2px;
  
  ${TaskTitle} {
    ${({completed}) => completed && `text-decoration: line-through;`}
  }
  
  button {
    margin-right: 8px;
  }
`

TaskContainer.propTypes = {
  completed: PropTypes.bool
}

export default TaskContainer