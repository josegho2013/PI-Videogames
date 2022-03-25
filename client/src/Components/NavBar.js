import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../Redux/actions/videogame";
import { BiSearchAlt } from "react-icons/bi";
import { GiGecko } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Styles/NavbarStyle.css";

function NavBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchByName(search));

    if (search) {
      setSearch("");
    }
  };

  return (
    <div className="navbar_container">
      <h1>
        {" "}
        <GiGecko size="4rem" />
        MANGO <br />
        GAMES
      </h1>
      <div className="links">
        <Link to="/Home">
          <button>Home</button>
        </Link>
       
      </div>

      <form className="search" onSubmit={(e) => handleSearch(e)}>
        <input
          type="search"
          placeholder="Search game..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <BiSearchAlt />
        </button>
      </form>
    </div>
  );
}

export default NavBar;
