import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../images/logo.png';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  '@media all': {
    maxHeight: 55,
  },
}));


export default function PrimarySearchAppBar() {


  const menuId = 'primary-search-account-menu';
  

  const mobileMenuId = 'primary-search-account-menu-mobile';


  return (
    <Box sx={{ flexGrow: 1, height: 70}}>
      <AppBar position="static" >
        <StyledToolbar disableGutters className='styles.customizeToolbar'>    
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
          <Box
            component="img"
            sx={{
            pt: 2,
            ml: 1,
            height: 70,
            width: 100,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            }}
            alt="amazon logo"
            src={logo}
          />
          </Typography>
          <Box sx={{display: 'flex', pt: 2, pb: 2}}>
            <Box sx={{pt:1.5, pl: 3}}>
              <RoomOutlinedIcon />
            </Box>
            <Box sx={{ }}>
              <Box sx={{display: 'flex', alignText: 'left', fontSize: 12, fontWeight: 300}}>Hello</Box>
              <Box sx={{display: 'flex', alignText: 'left', fontSize: 14, fontWeight: 700}}>Select your address</Box>
            </Box>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
              <AccountCircle />
          </Box>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
