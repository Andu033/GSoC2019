import DROPZONE_TYPES from './types'

const add = file => ({
  type: DROPZONE_TYPES.ADD,
  payload: {
    file: file,
    id: Math.floor(Math.random() * 100),
    caption: 'random'
  }
})

export default {
  add
}
