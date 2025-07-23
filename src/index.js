import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'

import { initialState, reducer } from './store/reducer'
import { StoreProvider } from './store/StoreContex'


const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  // <React.StrictMode>
  <StoreProvider initialState={initialState} reducer={reducer}>
    <App />
  </StoreProvider>
  // </React.StrictMode>
)

