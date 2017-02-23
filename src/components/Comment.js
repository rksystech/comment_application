import React, { PropTypes } from 'react'

const Comment = ({ onClick, text, name }) => (
  <li className="well"
    onClick={onClick}>
    <span>
    {text}
    <div className="pull-right" >By User ~ {name} 
    <br/>
    Commented at: {Date()}
    </div>
    </span>
  </li>
)

Comment.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Comment
