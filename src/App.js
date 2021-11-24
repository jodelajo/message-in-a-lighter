import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import SinglePost from './pages/singlePost/SinglePost'

function App() {
  return (
    <div className="app-container">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/singlepost" component={SinglePost}/>
     </Routes>
    </div>
  );
}

export default App;
