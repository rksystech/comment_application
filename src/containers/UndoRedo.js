import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p>
    <button onClick={onUndo} disabled={!canUndo} className="btn btn-danger">
    Delete Comment
    </button>
    <span class="col-sm-5"> </span>
    <button onClick={onRedo} disabled={!canRedo} className="btn btn-success">
      Get Back the deleted comment
    </button>
  </p>
)

const mapStateToProps = (state) => ({
  canUndo: state.comments.past.length > 0,
  canRedo: state.comments.future.length > 0
})

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
