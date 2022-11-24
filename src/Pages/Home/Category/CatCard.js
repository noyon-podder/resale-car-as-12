import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './CatCard.css';
const CatCard = ({cat}) => {
  const {image, brand, categoryId} = cat
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl cat-card">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="flex justify-between items-center p-5">
          <h2 className="text-xl fon-bold card-title cursor-pointer">{brand}</h2>
          
          <>
          <Link to={`/category/${categoryId}`} className="flex items-center font-semibold">Show More  <FaArrowRight className="ml-1 text-xl"></FaArrowRight></Link>
          </>
          
        </div>
      </div>
    </div>
  );
};

export default CatCard;
