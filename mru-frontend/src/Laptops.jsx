import "./Laptops.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const getLaptops = async () => {
    const res = await axios.get("http://localhost:9000/laptops");
    const { data } = res;
    setLaptops(data);
  };
  useEffect(() => {
    getLaptops();
  }, []);
  return (
    <>
      <h1>List of Laptops</h1>
      <div className="parent1">
        {laptops.map((element, index) => {
          return (
            <div className="child1" key={index}>
              <img src={element.pimage} alt={element.name} />
              <h2>
                <i className="fa fa-rupee" /> {element.pcost}
              </h2>
              <p>{element.pqty}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Laptops;
