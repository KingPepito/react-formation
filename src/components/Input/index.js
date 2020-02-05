import React, {useRef} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledInput = styled.input`
  margin-bottom: 16px;
  padding: 4px;
  border-radius: 4px;
  ${({color}) => color && `border: solid 2px ${color};`}
  outline: none;
`

StyledInput.propTypes = {
  color: PropTypes.string,
}

const Input = ({onSubmit, ...rest}) => {
  // Prefer ref to id
  const inputEl  = useRef(null)
  // Event fired when typing, execute onSubmit when pressing enter
  const onKeyDown = e => {
    if(e.key === 'Enter' && inputEl.current.value !== "" && onSubmit) {
      onSubmit(e.target.value)
      // Reset value
      inputEl.current.value = ""
    }
  }

  return <StyledInput {...rest} onKeyDown={onKeyDown} ref={inputEl}/>
}
// Provide property validation to your component
Input.propTypes = {
  onSubmit: PropTypes.func,
}

export default Input