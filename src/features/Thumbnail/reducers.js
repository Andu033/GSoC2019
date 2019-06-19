import THUMBNAIL_TYPES from './types'

export default (state = {}, action) => {
  switch (action.type) {
    case THUMBNAIL_TYPES.UPDATE:
      return state.thumbnails.map(thumbnail =>
        thumbnail.id === action.id
          ? { ...thumbnail, caption: action.caption }
          : thumbnail
      )

    case THUMBNAIL_TYPES.DELETE:
      for (var i = 0; i < state.thumbnails.length; i++) {
        if (state.thumbnails[i].id === action.id) {
          state.thumbnails[i].splice(i, 1)
          i--
        }
        return state
      }

    default:
      return state
  }
}
