import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CreateGame() {



  



  return (
    <div>
      <h2>Create Videogames</h2>
      <form>
        <div>
          <label>Title :</label>
          <input
            type="text"
            name="Title "
            placeholder=" Insert Title "
            value={input.Title }
            onChange={(e) => handleChange(e)}
            pattern="[a-zA-Z ]{3,15}"
            required
          />
        </div>
        <div>
          <label>description</label>
          <input
            type="text"
            name="description"
            placeholder=" Insert description"
            value={input.description}
            onChange={(e) => handleChange(e)}
            pattern="[a-zA-Z ]{3,15}"
            required
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            placeholder=" Insert genre"
            value={input.genre}
            onChange={(e) => handleChange(e)}
            pattern="[a-zA-Z ]{3,15}"
            required
          />
        </div>
        <div>
          <label>Release year</label>
          <input
            type="text"
            name="release-year"
            placeholder=" Insert Release-year"
            value={input.release-year}
            onChange={(e) => handleChange(e)}
            pattern="[a-zA-Z ]{3,15}"
            required
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="text"
            name="rating<"
            placeholder=" Insert Rating<"
            value={input.rating}
            onChange={(e) => handleChange(e)}
            pattern="[a-zA-Z ]{3,15}"
            required
          />
        </div>
        <div>
          <label>platform</label>
          <input
            type="text"
            name="platform"
            placeholder=" Insert Platform"
            value={input.platform}
            onChange={(e) => handleChange(e)}
            pattern="[a-zA-Z ]{3,15}"
            required
          />
        </div>
        <div>
          <label>image</label>
          <input
            type="text"
            name="image"
            placeholder="Insert Image"
            value={input.image}
            onChange={(e) => handleChange(e)}
            pattern="[a-zA-Z ]{3,15}"
            required
          />
        </div>
        <div>
          <label></label>
          <input />
        </div>
      </form>
    </div>
  );
}

export default CreateGame;
