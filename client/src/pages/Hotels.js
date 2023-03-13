import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import "../styles/Hotels.css";
import Kumrat from "../assets/Kumrat.jpg"

function Hotels() {
  const { name } = useParams();
  const { data, loading, error } = useFetch(`http://localhost:8800/api/hotels/finda/${name}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="body" >
      <h1>Hotels in {name}</h1>
      <div >{data.map((hotel) => (
        
        <div className="ccontainer" key={hotel._id}>
           <div className="item1">
            <div className="ccontainer2">
            <div className="item21">
            <button className= "buttonxd" >hh</button><img className="imgh" src={Kumrat}/><button className="buttonxd">hh</button>
            </div>
           <div className="item22"><p>Rating: {hotel.rating}</p></div>
           </div>
           </div>
          
           <Link to={`/hotel/${hotel._id}`}>
          <div className="item2"><h1>{hotel.name}</h1>
          <p >Cheapest Price: {hotel.cheapestPrice}</p></div> 
          </Link>
          <div className="item3">
          <p >Location: {hotel.location}</p>
          <p >Distance from center: {hotel.distance}</p>
          </div>
          
          </div>
          
          
        
      ))}</div>
    </div>
  );
}

export default Hotels;
