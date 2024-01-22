import React from 'react';
import {createBrowserHistory} from "history"
import './style.css';
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import {useHistory} from "react-router-dom"
export default function App() {
  const io="vink"
  const history=createBrowserHistory()
  return (

    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
          <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Home/>}/>
                    <Route path="con" element={<Contact his={history} io={io}/>} />
                    <Route path="about" element={<About his={history} />} />
                </Route>
            </Routes>
          
          </BrowserRouter>
      </div>

    </div>
  );
}
