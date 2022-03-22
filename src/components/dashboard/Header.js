import { AppBar, Toolbar, IconButton, Button } from '@mui/material';

import { useSelector } from 'react-redux';
import { userSelector } from '../../views/User/UserSlice';
import { useHistory } from 'react-router-dom';

export default function Header({ action, title }) {
  const history = useHistory();
  const { username } = useSelector(userSelector);
  console.log({ username });

  const onLogOut = () => {
    localStorage.removeItem('token');
    history.push('/signin');
  };

  return (
    <>
      <AppBar
        className='header'
        position='absolute'
        sx={{
          width: { lg: `calc(100% - 310px)` },
        }}
      >
        <Toolbar>
          <IconButton
            className='primary mr-2'
            aria-label='open drawer'
            edge='start'
            onClick={action}
            sx={{ display: { lg: 'none' } }}
          >
            <i className='icon-menu'></i>
          </IconButton>
          <div className='flex justify-between px-lg-3 w-100 text'>
            <h5 className='semibold my-auto'>{title}</h5>
            <div className='flex items-center justify-center'>
              <i className='icon-person h3 pr-1'></i>
              <small className='semibold pr-1'>{username}</small>
              <Button variant='outlined' onClick={onLogOut}>
                Log Out
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
