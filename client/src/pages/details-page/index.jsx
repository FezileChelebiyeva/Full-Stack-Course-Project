import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./index.scss";
const DetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const getDataById = async () => {
    const response = await axios.get(`http://localhost:8000/newcourses/${id}`);
    setData(response.data);
  };
  useEffect(() => {
    getDataById();
  }, []);
  return (
    <div id="details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.name}</title>
      </Helmet>
      <div className="container">
        <div className="details">
          <div className="img">
            <img src={data.image} alt="" />
          </div>
          <div className="info">
            <h3>{data.name}</h3>
            <p className="name">{data.work}</p>
            <p className="description">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
