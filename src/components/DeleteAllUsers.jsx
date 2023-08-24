import React from 'react'
import { deleteAllUsers } from '../store/actions'
import { useDispatch } from 'react-redux';

export const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllUsers());
  }

  return (
    <div className='my-5 text-center'>
      <button onClick={handleDeleteAll} className='bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600'>Delete All Users</button>
    </div>
  )
}
