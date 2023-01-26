import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import "./index.scss"
const Wishlist = () => {

    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);

  return (
    <div id="wishlist">
      <div className="container">
        <div className="wishlist">
          <div className="cards">
            {wishlist.data.map((element) => {
              return (
                <div className="card">
                  <div className="img">
                    <img src={element.image} alt="" />
                  </div>
                  <h3>{element.name}</h3>
                  <p className="name">{element.work}</p>
                  <p className="description">{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist
