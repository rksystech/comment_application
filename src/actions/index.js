let comments_id = 0
export const addTodo = (text,name) => ({
  type: 'ADD_COMMENT',
  id: comments_id++,
  text,
  name
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

