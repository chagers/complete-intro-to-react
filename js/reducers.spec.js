import reducers from './reducers'

test('SET_SEARCH_TERM', () => {
  let state
  state = reducers({searchTerm: 'hous', omdbData: {}}, {type: 'SET_SEARCH_TERM', searchTerm: 'house'})
  expect(state).toEqual({searchTerm: 'house', omdbData: {}})
})

test('@@INIT', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({searchTerm: '', omdbData: {}})
})
