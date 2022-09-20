import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomepageSkeleton = () => {
  return (
    <>
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
        <Skeleton width={100} height={130} />

        <div className="pt-3 px-2 ">
          <h4 className="indexColor fw-semibold">
            <Skeleton width={100} />
          </h4>
          <p className="small text-muted">
            <Skeleton width={200} />
          </p>
        </div>
        <Skeleton width={100} height={130} />

        <div className="pt-3 px-2 ">
          <h4 className="indexColor fw-semibold">
            <Skeleton width={100} />
          </h4>
          <p className="small text-muted">
            <Skeleton width={200} />
          </p>
        </div>
        <Skeleton width={100} height={130} />

        <div className="pt-3 px-2 ">
          <h4 className="indexColor fw-semibold">
            <Skeleton width={100} />
          </h4>
          <p className="small text-muted">
            <Skeleton width={200} />
          </p>
        </div>
        <Skeleton width={100} height={130} />

        <div className="pt-3 px-2 ">
          <h4 className="indexColor fw-semibold">
            <Skeleton width={100} />
          </h4>
          <p className="small text-muted">
            <Skeleton width={200} />
          </p>
        </div>
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
    </>
  );
};

export default HomepageSkeleton;
