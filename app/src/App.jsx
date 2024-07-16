import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./Components/Header/navbar";
import { Home } from "./Pages/Home/home";

export const BASE_URL = `http://localhost:9000`;

function App() {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [category, setcategory] = useState("all");
  // const [btn, setbtn] = useState(false);

  const filtedFood = (type) => {
    if (type === "all") {
      setfilter(data);
      setcategory("all");
      return;
    }
    const filterddata = data.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setfilter(filterddata);
    setcategory(type);
  };
  const SearchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);
    if (searchValue === "") {
      setfilter(null);
    }
    const filterddata = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(filterddata);
    console.log(filter);
    setfilter(filterddata);
  };

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((Response) => {
        setdata(Response.data);
        setfilter(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar
        SearchFood={SearchFood}
        category={category}
        filtedFood={filtedFood}
      />
      <Home data={filter || data} />
    </>
  );
}

export default App;
