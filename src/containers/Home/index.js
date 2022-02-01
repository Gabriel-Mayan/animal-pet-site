import './style.module.scss';

import api from '../../services/api';

import { useEffect } from "react";
import { useStores } from '../../stores';

export function HomeStudent() {
  const { userStore: { products, setProducts } } = useStores();

  const getProducts = async () => {
    try {
      const result = await api.get('/products');

      if (result.status !== 200) {
        throw 'Falha ao efetuar o login';
      }

      const { data: products } = result;
      setProducts(products);
    } catch (error) {
      if (error.request) {
        notify('error', error.request.response);
      }
    }
  }
  
  useEffect(() => {
		getProducts();
	}, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
