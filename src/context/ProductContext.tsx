import React, { createContext, useContext, useEffect, useState } from 'react';
import useStateWithStorage from '../hooks/useStateWithStorage';
import { Product, ProductParam } from '../utils/utils';

const initTeam = {
  products: [],
};

export const TeamContext = createContext({
  addProduct: Function,
  removeProduct: Function,
  products: [],
  count: Number,
});

const getInitialState = () => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : initTeam;
};

const TeamContextProvider = (props: any) => {
  const [products, setProducts] = useState(getInitialState);
  const [count, setCount] = useStateWithStorage('countProducts', 0);
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products, count]);

  const addProduct = (prd: any) => {
    setProducts((prev: any) => ({
      ...prev,
      products: [...prev.products, prd],
    }));
    setCount(count + 1);
  };
  const removeProduct = (prdId: any) =>
    setProducts((prev: any) => ({
      ...prev,
      products: prev.products.filter((p: any) => p.id !== prdId),
    }));

  return (
    <TeamContext.Provider
      value={{ count, addProduct, removeProduct, ...products }}
    >
      {props.children}
    </TeamContext.Provider>
  );
};

export const useProducts = () => useContext(TeamContext);

export default TeamContextProvider;
