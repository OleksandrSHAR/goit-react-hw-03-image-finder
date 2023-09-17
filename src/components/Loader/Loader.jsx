import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useEffect } from 'react';
export const Loader = ({ loading }) => {
  useEffect(() => {
    loading ? Loading.arrows() : Loading.remove();
  }, [loading]);
  return null;
};
