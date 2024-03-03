import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './App.css';

// Header component
const App = () => {
  return (
    <div className='app-wrapper'>;
    <header className='header'>;
      <h1>Personal Planner</h1>
      <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimgv3.fotor.com%2Fimages%2Fshare%2Fmake-a-personal-planner-with-Fotor-online-personal-planner-maker.png&tbnid=_MI5RiSb8ncSaM&vet=12ahUKEwiv0LKlw9iEAxUTq_0HHTB_BCYQMygCegQIARBS..i&imgrefurl=https%3A%2F%2Fwww.fotor.com%2Ffeatures%2Fpersonal-planner%2F&docid=nuAXU3INFsvsdM&w=1440&h=960&q=personal%20planner&ved=2ahUKEwiv0LKlw9iEAxUTq_0HHTB_BCYQMygCegQIARBS" alt="Personal Planner" />
      <nav>
          <div>
           Time Planner
          </div>
          <div>
            My Day
           </div>
           <div>
           My Week
        </div>
        <div>
            My Month
        </div>
            <div/> Goal Tracking
       </div>
        <ul>
          <li><a href="#">Time Planner</a></li>
          <li><a href="#">My Day</a></li>
          <li><a href="#">My Week</a></li>
          <li><a href="#">My Month</a></li>
          <li><a href="#">Goal Tracking</a></li>
          <li><a href="#">Big Goal</a></li>
        </ul>
      </nav>
    </header>
    </div>
  );
};



// Render the App component
ReactDOM.render(<App />, document.getElementById('root'));
export default App;