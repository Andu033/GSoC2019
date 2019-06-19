import THUMBNAIL_TYPES from './types'

const captionUpdate = caption => ({
  type: THUMBNAIL_TYPES.UPDATE,
  payload: caption
})

const thumbnailDelete = thumbnailId => ({
  type: THUMBNAIL_TYPES.DELETE,
  id: thumbnailId
})

export default {
  captionUpdate,
  thumbnailDelete
}
