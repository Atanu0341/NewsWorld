import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div className="bg-slate-700 h-full">
        <Navbar />
        <div>
          <News pageSize={6}/>
        </div>
      </div>
    )
  }
}
