import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import useCategory from "../../hooks/useCategory";
import { Link } from "react-router-dom";

const Categories = () => {
  const category = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {category?.map((c) => (
            <div className="col-md-6" key={c._id}>
              <Link
                to={`/category/${c.slug}`}
                className=" category ms-5  text-center"
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;