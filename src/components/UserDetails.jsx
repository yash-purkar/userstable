import React from 'react'
import { DeleteAllUsers } from './DeleteAllUsers'
import { fakeUserDetails } from '../api/index';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UsersSlice'
import { DisplayUsers } from './DisplayUsers';

export const UserDetails = () => {
  const dispatch = useDispatch();

  const handleAddNewUser = (data) => {
    dispatch(addUser({ user: data }))
  }

  return (
    <div>
      <div className='max-w-[600px] m-auto'>
        <div className='mx-5 shadow-lg p-3'>
          <div className='flex justify-between py-5'>
            <h2 className='text-xl font-bold text-gray-400'>List of User Details</h2>
            <button onClick={() => handleAddNewUser(fakeUserDetails())} className='bg-indigo-500 text-white px-2 py-1 rounded-lg hover:bg-indigo-600'>Add Random User</button>
          </div>
          <div className='py-5'>
            <DisplayUsers />
          </div>
        </div>
      </div>
      <DeleteAllUsers />
    </div>
  )
}
