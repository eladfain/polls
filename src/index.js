import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  CreatePoll  from "./components/CreatePoll";
import PollCard from "./components/PollCard";
import {
  BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
      <Router>
         <Switch>
           <Route path="/create">
              <CreatePoll/>
           </Route>
           <Route exact path="/">
               <Redirect to="/create" />
           </Route>
           <Route path="/poll/:id">
              <PollCard/>
           </Route>
         </Switch>
      </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
