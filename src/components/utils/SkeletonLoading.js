import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingSkeleton = ({ searchList }) => {
  return (
    <>
      <div>
        <div className="box p-2 shadow border cursor-pointer mb-4 searchResultFilterBox">
          <div className="d-flex flex-row">
            <Skeleton width={160} height={160} />
            <div className="cursor-pointer">
              <h2 className=" fw-bold mx-3 mb-2 mt-3   indexColor restNameText">
                <Skeleton width={100} />
              </h2>
              <div className="d-flex flex-column mx-3 ">
                <div className="indexColor fw-bold ratingText ">
                  <p className="my-lg-2 my-1">
                    <Skeleton width={400} />
                  </p>
                </div>
                <div className="thirdColor localityCity">
                  <p>
                    <Skeleton width={300} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hrline">
            <hr />
          </div>
          <div className="d-flex flex-row ">
            <div className="d-flex flex-column ms-3 fw-bold cuisine">
              CUISINES: <br />
              COST FOR TWO:
            </div>
            <div className="d-flex flex-column ms-3 fw-bold indexColor ms-5 bakery ">
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="box p-2 shadow border cursor-pointer mb-4 searchResultFilterBox">
          <div className="d-flex flex-row">
            <Skeleton width={160} height={160} />
            <div className="cursor-pointer">
              <h2 className=" fw-bold mx-3 mb-2 mt-3   indexColor restNameText">
                <Skeleton width={100} />
              </h2>
              <div className="d-flex flex-column mx-3 ">
                <div className="indexColor fw-bold ratingText ">
                  <p className="my-lg-2 my-1">
                    <Skeleton width={400} />
                  </p>
                </div>
                <div className="thirdColor localityCity">
                  <p>
                    <Skeleton width={300} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hrline">
            <hr />
          </div>
          <div className="d-flex flex-row ">
            <div className="d-flex flex-column ms-3 fw-bold cuisine">
              CUISINES: <br />
              COST FOR TWO:
            </div>
            <div className="d-flex flex-column ms-3 fw-bold indexColor ms-5 bakery ">
              <Skeleton width={100} />
              <Skeleton width={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingSkeleton;
