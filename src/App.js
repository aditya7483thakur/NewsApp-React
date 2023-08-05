import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_NEWS_APP_API_KEY;

  state = {
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState ({progress : progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={5}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path='/' element={<News  apiKey={this.apiKey} setProgress={this.setProgress} key='general' pageSize={8} country='in' category='general' />}></Route>
            <Route path='/science' element={<News  apiKey={this.apiKey} setProgress={this.setProgress} key='science' pageSize={8} country='in' category='science' />}></Route>
            <Route path='/business' element={<News  apiKey={this.apiKey} setProgress={this.setProgress} key='business' pageSize={8} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News  apiKey={this.apiKey} setProgress={this.setProgress} key='entertainment' pageSize={8} country='in' category='entertainment' />}></Route>
            <Route path='/technology' element={<News  apiKey={this.apiKey} setProgress={this.setProgress} key='technology' pageSize={8} country='in' category='technology' />}></Route>
            <Route exact path='/sports' element={<News  apiKey={this.apiKey} setProgress={this.setProgress} key='sports' pageSize={8} country='in' category='sports' />}></Route>
            <Route path='/health' element={<News  apiKey={this.apiKey} setProgress={this.setProgress} key='health' pageSize={8} country='in' category='health' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

