import './index.css'
import App from './App'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { ThumbnailReducers } from './features/Thumbnail'
import { DropzoneReducers } from './features/Dropzone'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  Thumbnail: ThumbnailReducers,
  Dropzone: DropzoneReducers
})
const store = createStore(rootReducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
