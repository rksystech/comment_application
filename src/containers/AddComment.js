import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddComment = ({ dispatch }) => {
  let input, name="john"

  const handleChange = (e) => {
    name= e.target.value;

  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, name))
        input.value = ''
      }}>


      <div className="col-sm-10">
            <div className="col-sm-7">
                
               <input ref={node => {
                input = node
              }} className="form-control" />
             </div>

            <div className="col-sm-3">
             <select  onChange={(value) =>handleChange(value)} className="form-control">
                <option value="john">John</option>
                <option value="bob">Bob</option>
                <option  value="wisely">Wisely</option>
                <option value="shawn">Shawn</option>
              </select>
             </div>

              
      </div>

        <span className="col-sm-2" > </span>
        <button type="submit" className="btn btn-primary">
          Add Your Comment
        </button>
      </form>
    </div>
  )
}
AddComment = connect()(AddComment)

export default AddComment
