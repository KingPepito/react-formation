import React, {useRef} from "react"

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

  return <input onKeyDown={onKeyDown} ref={inputEl}/>
}

export default Input