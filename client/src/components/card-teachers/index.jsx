import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../redux/slice/dataSlice";
import { Link } from "react-router-dom";
import { addData, removeData } from "../../redux/slice/wishlistSlice";
const TeachersCard = () => {
  const [sort, setSort] = useState(true);
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers);
  const wishlist = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getData(""));
  }, []);

  const handleSort = () => {
    setSort(!sort);
    sort ? dispatch(getData(1)) : dispatch(getData());
  };

  return (
    <div id="teachers-card">
      <div className="container">
        <div className="teachers-card">
          <h1>Our Teachers</h1>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            repellat aut <br /> neque! Doloribus sunt non aut reiciendis, vel
            recusandae obcaecati hic dicta <br /> repudiandae in quas quibusdam
            ullam, illum sed veniam!
          </p>
          <div className="search">
            <input
              onChange={(e) => dispatch(getData(e.target.value))}
              type="text"
              placeholder="Search..."
            />
            <button onClick={() => handleSort()}>Sort By Name</button>
          </div>
          <div className="cards">
            {teachers.data?.map((element) => {
              return (
                <div key={element._id} className="card">
                  <Link to={`/${element._id}`}>
                    <div className="img">
                      <img src={element.image} alt="" />
                    </div>
                  </Link>
                  <Link to={`/${element._id}`}>
                    <h3>{element.name}</h3>
                  </Link>
                  <p className="name">{element.work}</p>
                  <p className="description">
                    {element.description.substring(0, 80)}...
                  </p>
                  {wishlist.data.find((elem) => elem._id === element._id) ? (
                    <div
                      onClick={() => dispatch(removeData(element._id))}
                      className="icon"
                    >
                      <i className="fa-solid fa-heart"></i>
                    </div>
                  ) : (
                    <div
                      onClick={() => dispatch(addData(element))}
                      className="icon"
                    >
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  )}

                  <div className="btn">
                    <button
                      onClick={() =>
                        dispatch(deleteData(element._id)).then(() =>
                          dispatch(getData(""))
                        )
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersCard;
