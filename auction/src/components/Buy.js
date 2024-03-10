import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/show.css";
import { useLocation } from "react-router-dom";

function Show() {
  const [item, setItem] = useState([]);
  const location = useLocation();
  const receivedValue = location.state.value;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/i/" + receivedValue
        );
        setItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="show">
        <h1>All Items</h1>
        <div className="show-con">
          {item.map((i) => (
            <div className="item" key={i.ID}>
              <div>
                {i.cover && (
                  <img
                    className="photo"
                    src={`http://localhost:8000/uploads/${i.cover}`}
                    alt=""
                  />
                )}
              </div>
              <h2>{i.Name}</h2>
              <p>{i.Description}</p>
              <p>$ {i.Price} </p>
              <br />
              <div className="show-btn">
                <Link to={`/buy/${i.ID}`}>
                  <button>Buy</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Show;
