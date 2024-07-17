import React, { useState } from 'react'
import { Menu, MenuItem } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget); // here the value of setOpen() will be the 'event.currentTarget' and it will be a 'String value' so we have to convert it into a 'Boolean value' like we did it below.
  }
  const handleClose = () => {
    setOpen(false)
  }

  const logoutUser = () => {
    setAccount('');
  }
  return (
    <>
      <div onClick={handleClick}> <p className='text-white font-bold cursor-pointer ml-[20px]'>{account}</p></div>
      <Menu
        className='mt-[5px]'
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
          <PowerSettingsNewIcon color='primary' fontSize='small' />
          <p className='ml-[20px] text-[14px]'>Logout</p>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Profile
