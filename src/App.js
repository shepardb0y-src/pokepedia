import "./App.css";
import Nav from "./components/Nav";
import Usercontext from "./contexts/UserContext";
import { useContext } from "react";
function App() {
  // to use context we have to import it
  //then we use the use context hook
  // const user = useContext(Usercontext);
  // console.log(user);
  // all context come with the provider component. this allowas us to use User.PRrovider as a wrapper component to be able to share information with children components. we need a value prop in the User Provider
  //we doo all of this so we dont have to de involved in prop drilling

  return (
    <div className="App">
      <Usercontext.Provider value={"phabb"}>
        <Nav />
      </Usercontext.Provider>
    </div>
  );
}

export default App;
