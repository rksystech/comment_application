import { connect } from 'react-redux'
import AllCommentList from '../components/AllCommentList'

const getVisibleComments = (comments, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return comments
    
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  comments: getVisibleComments(state.comments.present, state.visibilityFilter)
})


const VisibleCommentList = connect(
  mapStateToProps)(AllCommentList)

export default VisibleCommentList
