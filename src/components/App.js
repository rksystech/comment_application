import React from 'react'
import AddComment from '../containers/AddComment'
import VisibleCommentList from '../containers/VisibleCommentList'
import UndoRedo from '../containers/UndoRedo'

const App = () => (
  <div>
    <VisibleCommentList />
    <br />
<div className="row">
        <AddComment />
</div>
<br />
<div className="row col-sm-offset-1">
    <UndoRedo />
    </div>

  </div>
)

export default App

