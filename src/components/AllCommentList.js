import React, { PropTypes } from 'react'
import Comment from './Comment'

const AllCommentList = ({ comments}) => (
  <ul>
    {comments.map(a_comment =>
      <Comment
        key={a_comment.id}
        {...a_comment}
       
      />
    )}
  </ul>
)

AllCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default AllCommentList
