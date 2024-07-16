/* eslint-disable react/prop-types */
import "./HomeModule.css";
import { BASE_URL } from "../../App";
export const Home = ({ data }) => {
  return (
    <>
      <div className="main  gap-x-3 gap-y-2 flex  flex-wrap justify-center">
        {data?.map((product, i) => (
          <div key={i} className=" card    m-3    ">
            <img
              src={`${BASE_URL + product.image}`}
              alt={product.name}
              className=" rounded-full"
            />
            <section>
              <h3 className=" uppercase  text-white">{product.name}</h3>
              <p>{product.text}</p>
              <p className=" bg-red-500   px-3 py-1 rounded-sm float-end m-3">
                {" "}
                ${product.price.toFixed(2)}
              </p>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};
