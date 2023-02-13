import React from "react";
import { DestList } from "../helpers/DestList";
import DestItem from "../components/DestItem";
import "../styles/Menu.css";

function Destinations() {
  return (
    <div className="dest">
      <h1 className="dest">Destinations</h1>
      <div className="destList">
        
        {DestList.map((destItem, id) => {
          
          return (
            <DestItem
              id={destItem.id}
              image={destItem.image}
              name={destItem.name}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default Destinations;
