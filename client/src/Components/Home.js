import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../Redux/actions/videogame";
import Pagination from "./Pagination";
import Filters from "./Filters";
import Card from "./Card";
import "./Styles/HomeStyle.css";

export default function Home() {
  const dispatch = useDispatch();
  const videogames = useSelector(({ videogames }) => videogames);
  const requestGame = useSelector(({ requestGame }) => requestGame);

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  const indexOfLastProduct = currentPage * gamesPerPage;
  const indexOfFirsProduct = indexOfLastProduct - gamesPerPage;
  const gamesPage = requestGame?.slice(indexOfFirsProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getVideogames());
    
  }, []);

  return (

    <div className={videogames ? "" : "loading2"}>
      <div className={videogames ? "" : "home loading "}>
        <h1 className={videogames ? "nohome" : ""}>
          {videogames ? "" : "Loading..."}
        </h1>
          <Filters />
        <div className={videogames ? "home" : "nohome"}>
          <div className="pages">
            <div className="cards">
              {gamesPage ? (
                gamesPage.map((game) => {
                  return (
                    <Card
                      key={game.id}
                      id={game.id}
                      name={game.name}
                      rating={game.rating}
                      released={game.released}
                      description={game.description}
                      genres={game.genres}
                      background_image={game.background_image}
                    />
                  );
                })
              ) : (
                <div className="loading">Loading...</div>
              )}
            </div>
            <Pagination
              gamesPerPage={gamesPerPage}
              totalGames={requestGame?.length}
              paginate={paginate}
              key={"#"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
