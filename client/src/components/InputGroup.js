import React from 'react'

function InputGroup(props) {
  return (
    <div className="mb-3">
                        <label for="Title" className="form-label">{props.label}</label>
                        <input type="text" value={props.value} className="form-control" name={props.name} onChange={props.onChangeHandler} required />
    </div>
  )
}

export default InputGroup