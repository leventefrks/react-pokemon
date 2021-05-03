import { useEffect, useRef } from 'react';
import { isCancel, CancelToken } from 'axios';

export const useCancelToken = () => {
  const axiosSource = useRef(null);
  const newCancelToken = () => {
    axiosSource.current = CancelToken.source();
    return axiosSource.current.token;
  };

  useEffect(
    () => () => {
      if (axiosSource.current) axiosSource.current.cancel();
    },
    []
  );

  return { newCancelToken, isCancel };
};
