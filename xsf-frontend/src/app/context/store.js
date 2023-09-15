"use client";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
const GlobalContext = createContext({
  product: [],
  setProduct: () => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [product, setProduct] = useState([
    {
      id: 1,
      productName: "Product A",
      productCode: "a001",
      productPrice: "1000",
    },
    {
      id: 2,
      productName: "Product B",
      productCode: "b001",
      productPrice: "2000",
    },
    {
      id: 3,
      productName: "Product C",
      productCode: "c001",
      productPrice: "3000",
    },
    {
      id: 4,
      productName: "Product D",
      productCode: "d001",
      productPrice: "4000",
    },
    {
      id: 5,
      productName: "Product E",
      productCode: "e001",
      productPrice: "5000",
    },
    {
      id: 6,
      productName: "Product A1",
      productCode: "a002",
      productPrice: "5000",
    },
  ]);

  return <GlobalContext.Provider value={{ product, setProduct }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
