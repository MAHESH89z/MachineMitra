import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from './Hello';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
//import { robots } from './roborts';
//import CardList from './CardList.js'
import'./containers/App.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
 {/* <CardList robots={robots} /> */}
    {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username}/> */}
     {/* <Hello  greeting={'Mahesh Zanwar'}/>
    <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
