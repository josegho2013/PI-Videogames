import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterByGenre, getGenres } from "../Redux/actions/genre";
import { filterByPlatform } from "../Redux/actions/platforms";

function Filters() {
  const handleFilterGenre = (e) => {
    dispatch(filterByGenre(e.target.value));

  };
  const handleFilterPlatform = (e) => {
    dispatch(filterByPlatform(e.target.value));
  };

  useEffect(() => {
    dispatch(getGenres());
    
  }, []);

  const dispatch = useDispatch();
  const filters = useSelector(({ filters }) => filters);

  const filterPlat = filters?.platform.flat().filter((v, i, a) => {
   
    return a.findIndex((t) => t.id === v.id) === i;
  });

  

  return (
    <div>
      <div>Filter by Genre</div>
      <select onChange={(e) => handleFilterGenre(e)}>
        <option default>All</option>
        {filters.genre.map((G) => (
          <option key={G.id} value={G.name}>
            {G.name}
          </option>
        ))}
      </select>
      <select onChange={(e) => handleFilterPlatform(e)}>
        <option default>All</option>
        {filterPlat.map((p) => (
          <option key={p.id} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
