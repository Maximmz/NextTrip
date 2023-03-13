import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

 function Hotel() {
  const {id}= useParams();
  const { data, loading, error } = useFetch(`http://localhost:8800/api/hotels/find/${id}`);
  console.log(data);
  
  return (
    <div>Hotel</div>
  )
}

export default Hotel;
