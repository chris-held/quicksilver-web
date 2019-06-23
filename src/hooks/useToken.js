import useLocalStorage from './useLocalStorage';

const useToken = () => useLocalStorage('token', null);

export default useToken;
