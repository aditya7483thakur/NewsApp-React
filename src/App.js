import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () =>{

  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress,setProgress] = useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={5}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path='/' element={<News  apiKey={apiKey} setProgress={setProgress} key='general' pageSize={8} country='in' category='general' />}></Route>
            <Route path='/science' element={<News  apiKey={apiKey} setProgress={setProgress} key='science' pageSize={8} country='in' category='science' />}></Route>
            <Route path='/business' element={<News  apiKey={apiKey} setProgress={setProgress} key='business' pageSize={8} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News  apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={8} country='in' category='entertainment' />}></Route>
            <Route path='/technology' element={<News  apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={8} country='in' category='technology' />}></Route>
            <Route exact path='/sports' element={<News  apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={8} country='in' category='sports' />}></Route>
            <Route path='/health' element={<News  apiKey={apiKey} setProgress={setProgress} key='health' pageSize={8} country='in' category='health' />}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App;