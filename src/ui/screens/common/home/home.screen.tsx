// index.js
import React from 'react'

console.log('prod', ENV_API)

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

export const Home = () => <div style={styles.app}>Welcome to React!</div>

export default Home
