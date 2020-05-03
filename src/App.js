import React from 'react';
import './App.css';
import Header from './Header';
import Welcom from './Welcom';

function App(){
  
  return (
    <div className="App">
      <Header/>
      <div id="container">
      	{
      		var appHtml = React.renderToString(<Application/>);
      	}
      </div>
    </div>
  );
  
}


export default App;
