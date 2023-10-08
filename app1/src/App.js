// import logo from './logo.svg';
import './App.css';
import CircleHolder from './components/common/CircleHolder';
import React, { Suspense } from "react"
const BoxHolder = React.lazy(() => import("app2/BoxHolder"))

function App() {
  return (
    <div className="App">
        <h1>App-1</h1>
        <CircleHolder />

        <br/><br/>
        <hr/>

        <h1>Let's try to pull Box Holder from App2</h1>
        <Suspense fallback={"loading..."}>
          <BoxHolder />
        </Suspense>
        
    </div>
  );
}

export default App;
