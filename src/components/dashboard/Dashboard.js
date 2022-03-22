import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';

import Header from './Header';
import Sidebar from './Sidebar/Sidebar';

export default function Dashboard({ children, headerTitle, collapse }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className='main-content'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header action={handleDrawerToggle} title={headerTitle} />
        <Sidebar
          action={handleDrawerToggle}
          open={mobileOpen}
          collapse={collapse}
        />
        <div className='content-width px-2 mx-auto w-100'>{children}</div>
      </Box>
    </div>
  );
}
