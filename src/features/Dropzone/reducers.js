import DROPZONE_TYPES from './types'
const initialState = {
  files: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case DROPZONE_TYPES.ADD:
      console.log(state.files)
      return Object.assign({}, state, {
        files: state.files.concat(action.payload)
      })

    default:
      return state
  }
}
