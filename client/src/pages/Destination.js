import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Skardu from "../components/Skardu";
import Swat from "../components/Swat";
import Hunza from "../components/Hunza";
import useFetch from "../hooks/useFetch";
import "../styles/Destination.css";

function Destination(props) {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('./hotels');
  }
  
  const { data,loading,error } = useFetch(`http://localhost:8800/api/hotels/countByArea?areas=${name}`);
  console.log(data);

  switch (name) {
    case "swat":
      return (<div className="container"><div className="left-column">
        <Swat />
        </div> 
        <div className="right-column"><button onClick={handleClick} className="hotel-count-button">{loading ? ("Loading") : data } hotels</button></div>
        </div>);
    case "skardu":
      return (<div className="container"><div className="left-column">
      <Skardu />
      </div> 
      <div className="right-column"><button onClick={handleClick} className="hotel-count-button">{loading ? ("Loading") : data } hotels</button></div>
      </div>);
    case "hunza":
      return (<div className="container"><div className="left-column">
      <Hunza />
      </div> 
      <div className="right-column"><button onClick={handleClick} className="hotel-count-button">{loading ? ("Loading") : data } hotels</button></div>
      </div>);
    default:
      return <div>Destination not found</div>;
  }
}

export default Destination;
