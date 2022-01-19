import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NewsBox from './components/NewsBox'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY_2
  
  render() {
    return (<BrowserRouter>
    <div>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<NewsBox key={"general"} apiKey={this.apiKey}category={"general"} pageSize={8}/>}/>
        <Route exact path="/business" element={<NewsBox key={"business"} apiKey={this.apiKey}category={"business"} pageSize={8}/>}/>
        <Route exact path="/entertainment" element={<NewsBox key={"entertainment"} apiKey={this.apiKey}category={"entertainment"} pageSize={8}/>}/>
        <Route exact path="health/" element={<NewsBox key={"health"} apiKey={this.apiKey}category={"health"} pageSize={8}/>}/>
        <Route exact path="/science" element={<NewsBox key={"science"} apiKey={this.apiKey}category={"science"} pageSize={8}/>}/>
        <Route exact path="/sports" element={<NewsBox key={"sports"} apiKey={this.apiKey}category={"sports"} pageSize={8}/>}/>
        <Route exact path="/technology" element={<NewsBox key={"technology"} apiKey={this.apiKey}category={"technology"} pageSize={8}/>}/>
        
      </Routes>
      </div>
    </BrowserRouter>
    )
  }
}


