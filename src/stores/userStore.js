import { useLocalStorage } from 'react-use';

export function useUser() {
  const [products, setProducts] = useLocalStorage('prdoucts');
  const [token, setToken, removeToken] = useLocalStorage('token');
  const [userData, setUserData, removerUserData] = useLocalStorage('userData');

  function handleClearUserData() {
    removeToken();
    removerUserData();
  }

  return {
    token,
    setToken,
    products,
    setProducts,
    userData,
    setUserData,
    handleClearUserData,
  };
}
