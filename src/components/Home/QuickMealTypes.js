import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function QuickMealTypes(props) {
  let { meal } = props;
  const navigate = useNavigate();
  const getQuickSearch = (id) => {
    navigate("/quick-search?meal_type=" + id);
  };

  return (
    <>
      <section
        className="px-0 d-flex box__section quick-search-item shadow mb-4 position-relative"
        onClick={() => getQuickSearch(meal.meal_type)}
      >
        <img src={`./images/${meal.image}`} className="image-item img-fluid" />

        <div className="pt-3 px-2 ">
          <h4 className="indexColor fw-semibold">{meal.name}</h4>
          <p className="small text-muted">{meal.content}</p>
        </div>
      </section>
    </>
  );
}
