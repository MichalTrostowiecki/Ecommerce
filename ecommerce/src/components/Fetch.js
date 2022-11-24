import React, { useEffect } from "react";

export default function FetchData(props) {
  const { setAllProducts } = props;

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };

      const data = await fetch(
        "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=10&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
        options
      );
      const resp = await data.json();
      setAllProducts(resp);
    }
    fetchData();
  }, []);
}
