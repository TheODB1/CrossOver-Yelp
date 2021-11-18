
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <div style={{display: "flex", flexDirection: "column", backgroundImage: "url(/bgi.jpg)", marginBottom: "900px" }} >
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home"  component={Home} />
            <Route path="/Home"  component={Home} />
            <Route path="/Home"  component={Home} />
            </Routes>
        </Router>
      </div> 
      <div style= {{marginTop: "425px"}}>
        <div>
          <Home />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
