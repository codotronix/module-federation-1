// import logo from './logo.svg';
import './App.css';
import BoxHolder from './components/common/BoxHolder';
import React, { Suspense } from "react";
const CircleHolder = React.lazy(() => import("app1/CircleHolder"))

function App() {
  return (
    <div className="App">
      <h1>App-2</h1>
      <BoxHolder />

      <br/><br/>
      <hr/>

      <h1>Now let's import Circle Holder from App-1</h1>

      <Suspense fallback={"loading..."}>
        <CircleHolder />
      </Suspense>
    </div>
  );
}

export default App;
