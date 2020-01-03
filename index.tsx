// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './src/ui/screens/common/index'

const App = () => <Home />

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
