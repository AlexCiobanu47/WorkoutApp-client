import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="navbar-container">
        <Link className="navbar-link" to="/">
          <h1>Workout</h1>
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
