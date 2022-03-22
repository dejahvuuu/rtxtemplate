import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, fetchUserBytoken, clearState } from './UserSlice';
//import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, []);
  const { username, email } = useSelector(userSelector);
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      history.push('/signin');
    }
  }, [isError]);
  const onLogOut = () => {
    localStorage.removeItem('token');
    history.push('/signin');
  };
  return (
    <div className='container mx-auto'>
      {isFetching ? (
        <div>Loading</div>
      ) : (
        <Fragment>
          <div className='container mx-auto'>
            Welcome back <h3>{username}</h3>
          </div>
          <button
            onClick={onLogOut}
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          >
            Log Out
          </button>
        </Fragment>
      )}
    </div>
  );
};
export default Dashboard;
