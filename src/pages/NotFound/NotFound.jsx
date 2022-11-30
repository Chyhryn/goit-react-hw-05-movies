import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 2000);
  });

  return (
    <>
      <h1>Oops!</h1>
      <p>We don`t have this page at our App.</p>
    </>
  );
};

export default NotFound;
