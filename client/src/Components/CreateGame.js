import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CreateGame() {



  
  return (
    <div>
      <div>
        <div >
          <h2>Create your New Game</h2>
          <form>
            <div>
              <div>
                <input required />
              </div>
              <div>
                <input required />

                <input required />
              </div>
              <div>
                <input required />
                <input required />
              </div>
              <div className="general">
                <input required />

                <input required />
              </div>

              <div>
                <select>
                 
                </select>
                <div>
               
                </div>
              </div>
            </div>

            <div className="form_2">
              <div className="image">
                <input required />
              </div>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>

        <p>Your dog was created successfully!</p>
        <Link to="/home">
          <button>Go Home</button>
        </Link>
      </div>

     

     
    </div>
  );
}

export default CreateGame;
