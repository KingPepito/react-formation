import React, {useRef} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledInput = styled.input`
  margin-bottom: 16px;
`

const Input = ({onSubmit}) => {
  // Prefer ref to id
  const inputEl  = useRef(null)
  // Event fired when typing, execute onSubmit when pressing enter
  const onKeyDown = e => {
    if(e.key === 'Enter' && inputEl.current.value !== "") {
      onSubmit(e.target.value)
      // Reset value
      inputEl.current.value = ""
    }
  }

  return <StyledInput onKeyDown={onKeyDown} ref={inputEl}/>
}
// Provide property validation to your component
Input.propTypes = {
  onSubmit: PropTypes.func,
}

export default Input