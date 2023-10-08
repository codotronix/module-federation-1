import './App.css';
import Rect from './components/Rect';
import React, { Suspense } from "react";
const CircleHolder = React.lazy(() => import("app1/CircleHolder"));

// import CircleHolder from 'app1/CircleHolder'

function App() {
  return (
    <div className="App">
      <h1>App-3</h1>
      <Rect />

      <hr />

      <h2>We'll now try to pull in Circle Holder from App-1</h2>
      <Suspense fallback={"loading..."}>
        <CircleHolder />
      </Suspense>
      
    </div>
  );
}

export default App;
