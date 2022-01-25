import "./App.css";
import Nav from "./components/Nav";

import Usercontext from "./contexts/UserContext";
import { useContext, useState } from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
function App() {
  // to use context we have to import it
  //then we use the use context hook
  // const user = useContext(Usercontext);
  // console.log(user);
  // all context come with the provider component. this allowas us to use User.PRrovider as a wrapper component to be able to share information with children components. we need a value prop in the User Provider
  //we doo all of this so we dont have to de involved in prop drilling
  //wrap all of our routes inside react router Routes coomponent
  //the routed path is rendering the proped element
  // Pass on user to all apps children vis Provider props and the lift state
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <Usercontext.Provider value={user}>
        <Nav />
        <Routes>
          <Route path="Login" element={<Login setUser={setUser} />}></Route>
        </Routes>
      </Usercontext.Provider>
    </div>
  );
}

export default App;
