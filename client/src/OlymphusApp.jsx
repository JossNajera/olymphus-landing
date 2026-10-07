import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './Router/RouterApp'
import { store } from './Store/store'

const OlymphusApp = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  )
}

export default OlymphusApp