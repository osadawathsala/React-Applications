import { useEffect } from 'react';
import authFetch from '../axios/Interceptors';
import axios from 'axios';

const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const { data } = await authFetch('/react-store-products');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
