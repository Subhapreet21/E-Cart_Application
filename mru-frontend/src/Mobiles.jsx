import "./Mobiles.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Mobiles = () => {
  const [mobiles, setMobiles] = useState([]);

  const getMobiles = async () => {
    const res = await axios.get("http://localhost:9000/mobiles");
    const { data } = res;
    setMobiles(data);
  };

  useEffect(() => {
    getMobiles();
  }, []);

  return (
    <>
      <h1>List of Mobiles</h1>
      <div className="parent2">
        {mobiles.map((element, index) => {
          return (
            <div className="child2" key={index}>
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

export default Mobiles;
