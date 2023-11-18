import { useState, useEffect } from "react";

import useSorted from "./useSorted";

const useFiltered = (products, selectedColors) => {
    const { selectedColors, setSelectedColors } = useSorted();

  useEffect(() => {
    const filterProductsByColor = () => {
      if (selectedColors.length === 0) {
        setFilteredProducts([...products]);
      } else {
        const filtered = products.filter((product) =>
          product.colors.some((color) => selectedColors.includes(color))
        );
        setFilteredProducts(filtered);
      }
    };

    filterProductsByColor();
  }, [products, selectedColors]);

  return filteredProducts;
};

export default useFiltered;