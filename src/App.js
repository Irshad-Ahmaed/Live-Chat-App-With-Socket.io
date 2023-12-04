import './App.css';
import MainForm from './components/MainForm'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <div className="container-fluid  bg-light text-dark d-flex align-items-center justify-content-center" style={{height:"100vh"}}>
      <Router>
        <Routes>
          <Route index element={<h1><MainForm /></h1>}></Route>
          <Route path='/chat/:roomName' element={<ChatRoom />}></Route>
          <Route path='*' element={<h4>404 not found !</h4>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
