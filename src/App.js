import React from 'react';
import Signup from './Signup';
import Login3 from './Login3'
import{ BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Home';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login3/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Login3/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
