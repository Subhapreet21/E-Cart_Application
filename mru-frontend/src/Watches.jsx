import "./Watches.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  const getWatches = async () => {
    const res = await axios.get("http://localhost:9000/watches");
    const { data } = res;
    setWatches(data);
  };

  useEffect(() => {
    getWatches();
  }, []);

  return (
    <>
      <h1>List of Watches</h1>
      <div className="parent3">
        {watches.map((element, index) => {
          return (
            <div className="child3" key={index}>
              <img src={element.pimage} alt={element.pname} />
              <h3>
                <i className="fa fa-rupee" /> {element.pcost}
              </h3>
              <p>{element.pqty}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Watches;
