// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from '@app-screens'

const App = () => (
  <>
    <Home />
    <h1>ASd</h1>
  </>
)

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
