import React, { useState, useContext } from 'react'
import { ShoppingCart } from '@mui/icons-material'
import { DataContext } from '../../context/DataProvider'

//* Components:
import LoginDialog from '../login/LoginDialog'
import Profile from './Profile'
const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext)

  const openDialog = () => {
    setOpen(true);
  }

  return (
    <div id='wrapper' className="flex items-center justify-between">
      {
        account ? <Profile account={account} setAccount={setAccount} />
          :
          <button className='bg-white py-[4px] w-[120px] px-[5px] ml-[20px] rounded-sm font-bold text-[#2874F0]' onClick={() => openDialog()}>Login</button>
      }

      <p className='text-[16px] text-white font-bold ml-[20px] cursor-pointer '>Become a Seller</p>
      <a href="" className='text-white font-bold ml-[20px] '>More</a>
      <div className='flex ml-[20px] text-white gap-1 font-bold cursor-pointer'>
        <ShoppingCart />
        <p>Cart</p>
      </div>
      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default CustomButton
