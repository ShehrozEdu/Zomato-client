import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function QuickMealTypes(props) {
  let { meal, isLoading } = props;
  const navigate = useNavigate();
  const getQuickSearch = (id) => {
    navigate("/quick-search?meal_type=" + id);
  };

  return (
    <>
      {isLoading ? (
        <section className="px-0 d-flex box__section quick-search-item shadow mb-4 position-relative">
          <Skeleton width={100} height={130} />

          <div className="pt-3 px-2 ">
            <h4 className="indexColor fw-semibold">
              <Skeleton width={100} />
            </h4>
            <p className="small text-muted">
              <Skeleton width={200} />
            </p>
          </div>
        </section>
      ) : (
        <section
          className="px-0 d-flex box__section quick-search-item shadow mb-4 position-relative"
          onClick={() => getQuickSearch(meal.meal_type)}
        >
          <img
            src={`./images/${meal.image}`}
            className="image-item img-fluid"
          />

          <div className="pt-3 px-2 ">
            <h4 className="indexColor fw-semibold">{meal.name}</h4>
            <p className="small text-muted">{meal.content}</p>
          </div>
        </section>
      )}
    </>
  );
}
