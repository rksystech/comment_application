import { combineReducers } from 'redux'
import comments from './comment'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  comments,
  visibilityFilter
})

export default todoApp
