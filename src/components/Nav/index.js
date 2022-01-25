import Usercontext from "../../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const user = useContext(Usercontext);
  console.log(user, "nav");

  //below we will use Link from react to replace all of our anchor tags <a>
  // and us to replace the hrefs
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Pokepedia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="pokemon/list"
            >
              Pokemon-List
            </Link>
            <Link className="nav-link" to="Login">
              Login
            </Link>
            <Link className="nav-link" to="favorites">
              Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
